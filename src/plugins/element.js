/**
 * 按需引入element-ui
 */

import Vue from 'vue'
import {
  Aside,
  Button,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Header,
  Input,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Row,
  Col,
  Tabs,
  TabPane,
  Form,
  Select,
  Option,
  FormItem,
  Table,
  TableColumn,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Upload,
  DatePicker,
  Dialog,
  Pagination,
  Loading
} from 'element-ui'
import '../assets/css/element-variables.scss'

const variable = {
  Aside,
  Button,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Header,
  Input,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Tabs,
  TabPane,
  Form,
  Select,
  Option,
  FormItem,
  Table,
  TableColumn,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Upload,
  DatePicker,
  Dialog,
  Pagination,
  Loading
}

Object.keys(variable).forEach((item) => {
  Vue.use(variable[item])
})

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
