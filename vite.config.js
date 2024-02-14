import { resolve } from 'path'

export default {
 build: {
  rollupOptions: {
   input: {
    main: resolve(__dirname, 'index.html'),
    cores: resolve(__dirname, 'cores/cores.html')
   }
  }
 }
}