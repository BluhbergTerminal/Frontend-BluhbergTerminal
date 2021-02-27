import { Menu } from "antd";
import { A } from "hookrouter";

export default function Navbar() {
  return (
    <>
        <Menu defaultSelectedKeys="1" theme="dark" mode="horizontal">
          <Menu.Item key="1" >
            <A href="/">Test</A>
          </Menu.Item>
        </Menu>
    </>
  );
}
