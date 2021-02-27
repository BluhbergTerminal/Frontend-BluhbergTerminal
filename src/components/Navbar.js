import { Menu } from "antd";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { navigate } from "hookrouter";

export default function Navbar() {
  return (
    <>
      <Layout.Header>
        <Menu>
          <Menu.Item key="1" onClick={() => navigate("/")}>
            Test
          </Menu.Item>
        </Menu>
      </Layout.Header>
    </>
  );
}
