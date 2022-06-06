import React from 'react';
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

import { MemoriesKill } from './components/MemoriesKill';
import { FileLoader } from './FileLoader';

const items = [
  { label: '书', key: 'item-book' }, // 菜单项务必填写 key
  { label: '影', key: 'item-movie' },
  { label: '音', key: 'item-music' },
];

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [data, setData] = React.useState();

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
        <div className='logo'>
        </div>
        <Menu theme="dark" mode="inline" items={items} />
        <FileLoader onSuccess={(data) => setData(data)} />
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Content style={{ margin: '0 16px' }}>
          <MemoriesKill data={data} />
        </Layout.Content>
        <Layout.Footer  style={{ textAlign: 'center' }}>
            中国汽车工业工程有限公司涂装分工会 ©2022 Created by JetSnail
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
