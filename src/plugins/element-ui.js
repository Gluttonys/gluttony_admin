import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

import {
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Loading,
  Message,
  MessageBox
} from "element-ui";

const components = [
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Header,
  Main,
  Container,
  Aside,
]

components.forEach(component => Vue.use(component))
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;




