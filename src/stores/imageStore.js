import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    deep_learning: {
      standard: [],
      multi_output: {},
    },
    img_procs: {
      standard: [],
      multi_output: {},
    },
    metadata: {},
    original: "",
  }),
  actions: {
    addImage(data) {
      const {
        output: { method_type },
        result_type,
        id,
      } = data;

      if (method_type === "deep_learning") {
        if (result_type === "standard" || result_type === "score") {
          this.deep_learning.standard.push(data);
        } else if (result_type === "multi_output") {
          if (!this.deep_learning.multi_output[id]) {
            this.deep_learning.multi_output[id] = [];
          }
          this.deep_learning.multi_output[id].push(data);
        }
      } else if (method_type === "image_processing") {
        if (result_type === "standard" || result_type === "score") {
          this.img_procs.standard.push(data);
        } else if (result_type === "multi_output") {
          if (!this.img_procs.multi_output[id]) {
            this.img_procs.multi_output[id] = [];
          }
          this.img_procs.multi_output[id].push(data);
        }
      }
    },
    addMetadata(metadata) {
      this.metadata = metadata;
    },
    addOriginal(original) {
      this.original = original;
    },
    clearStore() {
      this.$reset();
    },
  },
});
