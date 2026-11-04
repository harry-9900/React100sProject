import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import obfuscator from 'vite-plugin-javascript-obfuscator'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // শুধুমাত্র প্রডাকশন বিল্ডের সময় অবফাসকেটর সক্রিয় হবে
      command === 'build' && obfuscator({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        rotateStringArray: true,
      }),
    ].filter(Boolean), // ফালতু ফলস ভ্যালু ফিল্টার করার জন্য
  }
})
