import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * Injeta <link rel="modulepreload"> para o chunk de recursos do Framer Motion
 * (src/lib/motionFeatures.ts). Assim ele baixa em paralelo com o JS principal,
 * e as animações de entrada começam exatamente como antes, sem atraso.
 */
function preloadMotionFeatures(): Plugin {
  return {
    name: 'preload-motion-features',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return
        const chunk = Object.values(ctx.bundle).find(
          (c) => c.type === 'chunk' && c.facadeModuleId?.replace(/\\/g, '/').endsWith('/src/lib/motionFeatures.ts'),
        )
        if (!chunk) return
        return [
          {
            tag: 'link',
            attrs: { rel: 'modulepreload', crossorigin: true, href: `/${chunk.fileName}` },
            injectTo: 'head',
          },
        ]
      },
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preloadMotionFeatures(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})
