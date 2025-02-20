import { useImageStore } from "@/stores/imageStore";

export const sseHandler = async (file) => {
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

      console.log("Received:", value);
      try {
        const trimmedValue = value
          .trim()
          .replace(/^data:/, "")
          .replace(/\\n/g, "")
          .replace(/'/g, '"');
        const data = JSON.parse(trimmedValue);
        if (data) {
          if (data["type"] === "deep_learning")
            imageStore.addDeepLearning(data);
          else imageStore.addImageProc(data);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  } catch (error) {
    console.error("Error uploading image or receiving SSE:", error);
  }
};
