const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constant": path.resolve(__dirname, "src/constant"),
      "@hook": path.resolve(__dirname, "src/hook"),
      "@images": path.resolve(__dirname, "src/images"),
    },
  },
};
