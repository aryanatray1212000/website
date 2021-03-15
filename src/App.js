import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout} from 'antd';
import AppHeader from './components/header';
import SubHead from './components/subhead';
import Home from './components/home';
import Home2 from './components/home2';
const { Header} = Layout;


function App() {
  return (
    
    <Layout className="mainLayout">
     <Header>
      <AppHeader />
      <SubHead />
      <Home />
      <Home2 />
     </Header>
    </Layout>
    
  );
}

export default App;
