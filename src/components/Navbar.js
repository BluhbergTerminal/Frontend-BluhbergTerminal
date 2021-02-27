import { Menu } from "antd";
import { A } from "hookrouter";
import {routes} from "../routes"


const makeMenuItems = () => {
  let i = 1
  const items = []
  Object.keys(routes).forEach(route => {
      items.push(
      <Menu.Item key={String(i)} >
        <A href={route}>{route.slice(1)}</A>
      </Menu.Item>)
    i++
  return items
  }
  )
  return items
};

export default function Navbar() {
  return (
    <>
        <Menu defaultSelectedKeys="1" theme="dark" mode="horizontal">
          {makeMenuItems()}
        </Menu>
    </>
  );
}
