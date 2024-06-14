import { defineConfig } from "umi";
import routes from './src/routers';

export default defineConfig({
  routes,
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd',],
  antd: {},
});
