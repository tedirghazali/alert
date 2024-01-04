import { defineCustomElement } from 'vue'
import VueAlertBox from '../vue/components/AlertBox.vue'
import VueAlertNotification from '../vue/components/AlertNotification.vue'

//@ts-ignore
export const AlertBox = defineCustomElement(VueAlertBox)
//@ts-ignore
export const AlertNotification = defineCustomElement(VueAlertNotification)

export function useTedirTable() {
  customElements.define('alert-box', AlertBox)
  customElements.define('alert-notification', AlertNotification)
}
