// vite.config.ts - 完整配置
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    
    // 路径别名配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@types': path.resolve(__dirname, './src/types'),
      },
    },
    
    // 开发服务器配置
    server: {
      port: 5173,
      host: true, // 监听所有地址
      open: true, // 自动打开浏览器
      proxy: {
        // 代理配置示例
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/ws': {
          target: env.VITE_WS_URL?.replace('ws://', 'http://') || 'http://localhost:3000',
          ws: true,
          changeOrigin: true,
        },
      },
    },
    
    // 构建配置
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          // 代码分割配置
          manualChunks: {
            vendor: ['react', 'react-dom'],
            editor: ['monaco-editor'],
            ui: ['@radix-ui/react-components'],
          },
        },
      },
      chunkSizeWarningLimit: 1000, // 大小警告限制
    },
    
    // 预构建配置
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
});
