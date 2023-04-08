import { useState, useEffect } from 'react';
import Logo from '../Assets/Images/MainLogo.png';
import './Sidebar.css';
import { MdDashboard, MdPayments } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineTeam, AiFillQuestionCircle } from 'react-icons/ai';
import { BsInfoSquareFill } from 'react-icons/bs';
import { FaHandshake, FaCubes, FaTrophy } from 'react-icons/fa';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';




const Sidebar = () => {
    const [active, setActive] = useState();
    const sideData = [
        {
            key: 0,
            name: "Dashboard",
            icon: <MdDashboard style={{ fontSize: "20px", opacity: "1", color: active === "Dashboard" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Dashboard" ? "active" : "not-active",
            aName: active === "Dashboard" ? "side-items-names-active" : "side-items-names",
            paths: '/dashboard',
        },
        {
            key: 1,
            name: "Orders",
            icon: <FiPackage style={{ fontSize: "20px", opacity: "1", color: active === "Orders" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Orders" ? "active" : "not-active",
            aName: active === "Orders" ? "side-items-names-active" : "side-items-names",
            paths: "/orders",
        },
        {
            key: 2,
            name: "Team Members",
            icon: <AiOutlineTeam style={{ fontSize: "20px", opacity: "1", color: active === "Team Members" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Team Members" ? "active" : "not-active",
            aName: active === "Team Members" ? "side-items-names-active" : "side-items-names",
            paths: 'teams'
        },
        {
            key: 3,
            name: "Partners",
            icon: <FaHandshake style={{ fontSize: "20px", opacity: "1", color: active === "Partners" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Partners" ? "active" : "not-active",
            aName: active === "Partners" ? "side-items-names-active" : "side-items-names",
            paths: "/partners"
        },
        {
            key: 4,
            name: "Product Listings",
            icon: <FaCubes style={{ fontSize: "20px", opacity: "1", color: active === "Product Listings" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Product Listings" ? "active" : "not-active",
            aName: active === "Product Listings" ? "side-items-names-active" : "side-items-names",
            paths: "/productlist"
        },
        {
            key: 5,
            name: "Awards & Honours",
            icon: <FaTrophy style={{ fontSize: "20px", opacity: "1", color: active === "Awards & Honours" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Awards & Honours" ? "active" : "not-active",
            aName: active === "Awards & Honours" ? "side-items-names-active" : "side-items-names",
            paths: "/awards"
        },
        {
            key: 6,
            name: "About Us",
            icon: <BsInfoSquareFill style={{ fontSize: "20px", opacity: "1", color: active === "About Us" ? "c90000" : "a6a6a6" }} />,
            cName: active === "About Us" ? "active" : "not-active",
            aName: active === "About Us" ? "side-items-names-active" : "side-items-names",
            paths: "/about",
        },
        {
            key: 7,
            name: "Payment Info",
            icon: <MdPayments style={{ fontSize: "20px", opacity: "1", color: active === "Payment Info" ? "c90000" : "a6a6a6" }} />,
            cName: active === "Payment Info" ? "active" : "not-active",
            aName: active === "Payment Info" ? "side-items-names-active" : "side-items-names",
            paths: "/paymentinfo",
        }
    ]

    const handleActiveBar = (title) => {
        setActive(title);
    }

    useEffect(() => {
        setActive("About Us")
    }, [])

    return (
        <div style={{ height: "100vh" }} className="sidebar-wrapper">
            <div className="sidebar-logo">
                <div style={{ display: "flex", border: "1px solid #f4f4f4", borderRadius: "50px", width: "30px", height: "30px", justifyContent: "center", alignItems: "center", marginLeft: "5px", marginTop: "3px" }}>
                    <img style={{ height: "20px", width: "20px" }} src={Logo} alt="logo" />
                </div>
                <div className="sidebar-company">
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>A.T. INKS</div>
                </div>
            </div>
            <div className="sidebar-pages" >
                {
                    sideData.map((details) => {
                        return (
                            <div className={details.cName} key={details.key} onClick={() => handleActiveBar(details.name)}>
                                <div>
                                    <Link to={details.paths} id="link" className="link" >
                                        <div className={`side-items`}>
                                            <div className="side-icons" >{details.icon}</div>
                                            <div className={details.aName}>{details.name}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="side-card">
                <Card style={{ marginTop: "90px", height: "180px" }}>
                    <div><AiFillQuestionCircle style={{ fontSize: "26px", opacity: "0.5" }} /></div>
                    <div style={{ fontWeight: "600", fontSize: "14px" }} >Need Help?</div>
                    <div style={{ whiteSpace: "nowrap" }}>Our support team is </div>
                    <div style={{ whiteSpace: "nowrap" }}>at your disposal. </div>

                    <div style={{ margin: "10px 0px" }}>
                        <Button style={{ backgroundColor: "black", color: "#fff", textAlign: "center", padding: "0px 30px" }} >Get Help</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Sidebar;