import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { createApp } from 'vue'
import App from './TelaPrinc.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueYoutube from 'vue-youtube'

createApp(App).use(Quasar, quasarUserOptions, VueYoutube).mount('#app')
