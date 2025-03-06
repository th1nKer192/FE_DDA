import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import Blank from './layout/wrapper/blank.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)
app.use(router)
app.use(Toaster, {
    position:"top-right",
    duration:3500,
    max:3
})
app.component("default-layout", Default);
app.component("blank-layout", Blank);

app.mount("#app")