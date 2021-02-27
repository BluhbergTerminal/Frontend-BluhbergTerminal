import { Menu } from "antd";
import "antd/dist/antd.css";
import { Layout } from "antd";

export default function Navbar() {
  return (
    <>
      <Layout.Header>
        <Menu>
          <Menu.Item key="1">Test</Menu.Item>
        </Menu>
      </Layout.Header>
    </>
  );
}
