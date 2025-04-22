import { useImageStore } from "@/stores/imageStore";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

const process_response = async (response) => {
  const imageStore = useImageStore();

  if (!response.body) {
    console.error("Response body is null");
    return;
  }

  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    console.log(value);

    try {
      const trimmedValue = value
        .trim()
        .replace(/^data:/, "")
        .replace(/\\n/g, "")
        .replace(/'/g, '"');

      const parsedData = JSON.parse(trimmedValue);

      if (parsedData.message) {
        toast({
          title: "Cập nhật quá trình xử lý",
          description: parsedData.message,
          duration: 2000,
        });
      }

      if (!parsedData?.data) {
        console.error("Invalid response format:", parsedData);
        continue;
      }

      if (parsedData.status === "starting") {
        imageStore.addOriginal(parsedData.data.output.path);
        continue;
      }

      if (parsedData.data.result_type === "metadata") {
        imageStore.addMetadata(parsedData.data.metadata);
        continue;
      }

      if (parsedData.status === "processing") {
        imageStore.addImage(parsedData.data);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
};

export const upload_image = async (file) => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    await process_response(response);
  } catch (error) {
    console.error("Error uploading image or receiving SSE:", error);
  }
};

export const get_example = async (uuid) => {
  if (!uuid) return;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/examples/${uuid}`,
      {
        method: "GET",
      }
    );

    await process_response(response);
  } catch (error) {
    console.error("Error fetching example data:", error);
  }
};
