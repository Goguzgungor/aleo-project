import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import CrashChart from "../charts/CrashChart";

export const MyLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", minWidth:"100vh" }}>
      <Sider width={200} style={{ background: "#fff" }}>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>Header</Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <CrashChart />
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
