import './MainHeader.css';
import { Input, Button, Space, Dropdown } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, DownOutlined } from "@ant-design/icons"
import Logo from '../Assets/Images/MainLogo.png';
import User from '../Assets/Images/user.png';

const items = [
    {
        key: 1,
        label: (
            <a target="" rel="" href="/">
                Logout
            </a>
        ),
    }
]
const MainHeader = () => {
    return (
        <header className="header">
            <div className="header-logo"><img style={{ height: "40px", width: "40px" }} src={Logo} alt="logo" /></div>
            <div className="header-search"><Input placeholder="Search..." id="inputId" prefix={<SearchOutlined style={{ opacity: "0.5" }} />} /></div>
            <div className="header-checkout">
                <Button style={{ backgroundColor: "black", color: "#fff", textAlign: "center", padding: "0px 30px" }} icon={<ShoppingCartOutlined style={{ fontSize: "16px" }} />} >Checkout(200)</Button>
            </div>
            <Space>
                <div style={{ display: "flex" }}><img style={{ height: "30px", width: "30px" }} src={User} alt="User" /></div>
                <Dropdown
                    trigger={['click']}
                    menu={{ items }}
                    placement="bottomRight"
                    arrow
                >
                    <Space>
                        <div style={{ cursor: "pointer" }}>User Admin</div>
                        <div style={{ cursor: "pointer" }}><DownOutlined /></div>
                    </Space>
                </Dropdown>
            </Space>
        </header>
    )
}

export default MainHeader;