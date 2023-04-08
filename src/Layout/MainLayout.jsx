import { Layout, } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Orders from '../Pages/Orders';
import About from '../Pages/About';
import TeamMembers from '../Pages/TeamMembers';
import Partners from '../Pages/Partners';
import ProductListings from '../Pages/ProductListings';
import Awards from '../Pages/Awards';
import PaymentInfo from '../Pages/PaymentInfo';
import MainHeader from './MainHeader';
import Sidebar from './Sidebar';

const { Header, Sider, Content } = Layout;
const headerStyle = {
    height: '4.5rem',
    backgroundColor: 'white',
};
const contentStyle = {
    borderRadius: "10px",
    marginLeft: "10px",
    marginBottom: "20px",
    marginRight: "20px",
    marginTop: "20px",
    paddingLeft: "20px",
    backgroundColor: 'white',
    height: "55vw"
};
const siderStyle = {
    borderRadius: "10px",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "10px",
    backgroundColor: 'white',
};

const MainLayout = () => {

    return (
        <Layout>
            <Header style={headerStyle}><MainHeader /></Header>
            <Layout>
                <Sider style={siderStyle}><Sidebar /></Sider>
                <Content style={contentStyle}>
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/teams' element={<TeamMembers />} />
                        <Route path='/partners' element={<Partners />} />
                        <Route path='/Productlist' element={<ProductListings />} />
                        <Route path='/awards' element={<Awards />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/paymentinfo' element={<PaymentInfo />} />

                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}
export default MainLayout;