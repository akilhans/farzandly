import { Config } from '@remotion/cli/config';

// Delivery settings live in scripts/render.mjs; these only affect `npx remotion render`.
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(95);
Config.setCodec('h264');
Config.setCrf(16);
Config.setPixelFormat('yuv420p');
