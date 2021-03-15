import React from 'react';
import { Layout, Menu} from 'antd';
function Appheader() {
    return (
        <div className="container-fluid">
            <div className="header">
                 <div className="logo">
                     <a href="">logo</a> 
                 </div>
                    <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
                     
                     

                     
                     
                    
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Special Offers</Menu.Item>
                    <Menu.Item key="3">Login</Menu.Item>
                    <Menu.Item key="4">Sign up</Menu.Item>
                    <Menu.Item key="5">Contact us</Menu.Item>
                    <Menu.Item key="6">English</Menu.Item>
                    <Menu.Item key="7">BTC</Menu.Item>
                    </Menu>
                
            </div>
    
        </div>
    )
}

export default Appheader
