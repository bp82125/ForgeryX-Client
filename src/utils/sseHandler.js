import { useImageStore } from "@/stores/imageStore";

export const upload_image = async (file) => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const imageStore = useImageStore();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.body) {
      console.error("Response body is null");
      return;
    }

    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      try {
        const trimmedValue = value
          .trim()
          .replace(/^data:/, "")
          .replace(/\\n/g, "")
          .replace(/'/g, '"');

        console.log("Received and trimmed:", trimmedValue);

        const parsedData = JSON.parse(trimmedValue);

        if (!parsedData?.data) {
          console.error("Invalid response format:", parsedData);
          continue;
        }

        if (parsedData.data.result_type === "metadata") {
          imageStore.addMetadata(parsedData.data.metadata);
          continue;
        }

        imageStore.addImage(parsedData.data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  } catch (error) {
    console.error("Error uploading image or receiving SSE:", error);
  }
};

export const get_example = async (uuid) => {
  if (!uuid) return;

  const imageStore = useImageStore();

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/examples/${uuid}`,
      {
        method: "GET",
      }
    );

    if (!response.body) {
      console.error("Response body is null");
      return;
    }

    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      try {
        const trimmedValue = value
          .trim()
          .replace(/^data:/, "")
          .replace(/\\n/g, "")
          .replace(/'/g, '"');

        console.log("Received and trimmed:", trimmedValue);

        const parsedData = JSON.parse(trimmedValue);

        if (!parsedData?.data) {
          console.error("Invalid response format:", parsedData);
          continue;
        }

        if (parsedData.data.result_type === "metadata") {
          imageStore.addMetadata(parsedData.data.metadata);
          continue;
        }
        
        if (parsedData.data.result_type) {
          imageStore.addImage(parsedData.data);
        }

      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  } catch (error) {
    console.error("Error fetching example data:", error);
  }
};
