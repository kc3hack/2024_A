// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import fs from "fs";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       key: fs.readFileSync("../certs/kansai.local-key.pem"),
//       cert: fs.readFileSync("../certs/kansai.local.pem"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
