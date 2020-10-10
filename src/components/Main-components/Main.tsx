import React from 'react'; // let's also import Component
import { Layout, Button } from 'antd';
import './Main.less';

export default class Main extends React.Component {
  state = {
    size: 'large',
  };

  render() {
    // const { size } = this.state;
    const { Header, Footer, Sider, Content } = Layout;

    return (
      <React.Fragment>
        <Layout>
          <Sider>
            <h1 className="myclass"> this header side</h1>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              {' '}
              <Button type="primary">Test override theme with craco</Button>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}
