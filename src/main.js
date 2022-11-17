import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/sass/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)

app.use(router);

app.mount('#app')

