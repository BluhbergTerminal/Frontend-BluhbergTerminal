import { Menu } from "antd";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { A } from "hookrouter";

export default function Navbar() {
  return (
    <>
      <Layout.Header>
        <Menu>
          <Menu.Item key="1" >
            <A href="/">Test</A>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    </>
  );
}
