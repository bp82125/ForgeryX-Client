import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    description: {
      isOpen: false,
      methodId: null,
    },
    comparison: {
      isOpen: false,
      imageUrl: null,
    },
  }),
  actions: {
    openDescriptionModal(methodId) {
      this.description.methodId = methodId;
      this.description.isOpen = true;
    },
    openComparisonModal(imageUrl) {
      this.comparison.imageUrl = imageUrl;
      this.comparison.isOpen = true;
    },
    closeDescriptionModal() {
      this.description.isOpen = false;
      this.description.methodId = null;
    },
    closeComparisonModal() {
      this.comparison.isOpen = false;
      this.comparison.imageUrl = "";
    },
  },
});
