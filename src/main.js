import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
createApp(App).use(ElementPlus,{locale:zhCn}).component('QuillEditor', QuillEditor).use(router).mount('#app')
