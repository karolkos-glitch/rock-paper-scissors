import {defineConfig} from 'vitest/config';
import {mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        reporters: ["verbose", "html"],
        includeSource: ["src/**"],
        coverage: {
            excludeNodeModules: true,
            include: ["src/**"],
            exclude: ["src/**/*.stories.tsx", "src/**/index.ts", "src/vite-env.d.ts", "src/setupTests.ts", "src/main.tsx", "src/**/*.{test.ts,test.tsx}"],
            all: true
        }
    }
}))