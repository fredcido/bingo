import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "components",
  plugins: [sass()],
  copy: [
    {
      src: "../node_modules/spectre.css/dist/spectre.min.css",
      dest: "build/css/style.min.css"
    }
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
