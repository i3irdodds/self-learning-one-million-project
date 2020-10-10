import React from 'react'; // let's also import Component
import { Layout, Button, Menu, Breadcrumb } from 'antd';
import logo from './../../images/logo.png';
import './Main.less';
import './Main.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

export default class Main extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    // const { size } = this.state;
    const { Header, Footer, Sider, Content } = Layout;

    return (
      <React.Fragment>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="250"
          >
            <div className="logo">
              <img src={logo} alt="" />
              {this.state.collapsed ? null : (
                <h4 style={{ margin: '15px 0 0 15px', color: '#ffffff' }}>
                  ODDS BACK OFFICE
                </h4>
              )}
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                TAWI50
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                INVOICE
              </Menu.Item>
              <Menu.Item key="10" icon={<DesktopOutlined />}>
                CV PROFILE
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />} />
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}
