import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind3,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(), // required when using attributify mode
    presetWind3(), // required
    presetTypography(),
  ],
});
