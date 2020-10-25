import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

import {
  Container,
  Aside,
  Header,
  Main,
  Tabs,
  TabPane,
  Timeline,
  TimelineItem,
  Card,
  Menu,
  Submenu,
  MenuItem,
  Table,
  TableColumn,
  MenuItemGroup,
  Row,
  Col,
  Avatar,
  Popover,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Image,
  Input,
  Tag,
  Button,
  Progress,
  Alert,
  Loading,
  Message,
  MessageBox
} from "element-ui";

const components = [
  Progress,
  Tag,
  Tabs,
  Button,
  Timeline,
  TimelineItem,
  Card,
  Alert,
  Avatar,
  TabPane,
  Popover,
  Table,
  TableColumn,
  Input,
  Form,
  FormItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  Image,
  BreadcrumbItem,
  Row,
  Col,
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




