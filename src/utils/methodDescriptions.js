export const methodDescriptions = {
  trufor: {
    description: `
         Framework TruFor có đầu vào là một ảnh RGB. Ảnh này sẽ được đưa vào module NoisePrint++ để trích xuất noise features trong ảnh. Sau đó, cả ảnh RGB và các noise features này đều được đưa vào một encoder để trích xuất các dense features phục vụ cho các bước tiếp theo trong framework.

         Những dense features được sử dụng làm đầu vào cho một anomaly decoder, từ đó tạo ra một anomaly map. Đây là một heatmap giúp người dùng xác định vùng nào bị chỉnh sửa. Đồng thời, những features đó cũng được đưa vào một confidence decoder để tạo ra confidence map.

         Pipeline này còn kết hợp đầu ra của cả hai decoder với một pooling module nhằm tạo ra một vector đặc trưng, sau đó được đưa vào forgery detector module để dự đoán integrity score – yếu tố quan trọng trong việc xác định ảnh có bị chỉnh sửa hay không.

         Module NoisePrint++ sử dụng cùng một kiến trúc như NoisePrint nhưng được huấn luyện lại với tập dữ liệu gồm nhiều ảnh nguyên gốc hơn. Encoder dựa trên kiến trúc CMX, kết hợp các module của SegFormer. Cả hai decoder đều sử dụng kiến trúc multilayer perceptron của SegFormer và được huấn luyện trên tập dữ liệu bao gồm ảnh gốc và ảnh bị chỉnh sửa cùng với các ground truth mask tương ứng. Đối với confidence decoder, True class probability map được sử dụng làm mask để xác định độ tin cậy của anomaly map.

         Pooling module có nhiệm vụ tạo ra một vector đặc trưng gồm 8 thành phần, sau đó được đưa vào hai fully connected layers để dự đoán integrity score. Hai fully connected layers này tạo thành forgery detector và được huấn luyện trên cùng tập dữ liệu với các decoder.
        `,
    paper: {
      "TruFor: Leveraging all-round clues for trustworthy image forgery detection and localization":
        "https://arxiv.org/pdf/2212.10957",
      "Noiseprint: a CNN-based camera model fingerprint":
        "https://arxiv.org/pdf/1808.08396",
      "SegFormer: Simple and Efficient Design for Semantic Segmentation with Transformers":
        "https://arxiv.org/pdf/2105.15203",
      "CMX: Cross-Modal Fusion for RGB-X Semantic Segmentation with Transformers":
        "https://arxiv.org/abs/2203.04838",
    },
  },
  method_2: {
    description: "This method detects edges using Canny Edge Detection.",
    paper: "https://example.com/canny-edge-detection-paper",
  },
  method_3: {
    description: "This method enhances colors using Histogram Equalization.",
    paper: "https://example.com/histogram-equalization-paper",
  },
};
