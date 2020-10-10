import React from 'react'; // let's also import Component
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './main.css';
export default class Main extends React.Component {
  state = {
    size: 'large',
  };

  render() {
    const { size } = this.state;
    return (
      <React.Fragment>
        <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
          Download
        </Button>
      </React.Fragment>
    );
  }
}
