import { useState } from 'react';
import { Tabs, Input } from 'antd';
import Logo from '../Assets/Images/MainLogo.png';
import Info from './Info';
import './About.css';
import { MdVerified, MdModeEditOutline } from 'react-icons/md';

const { TextArea } = Input;

const items = [
    {
        key: '1',
        label: `Info`,
        children: <Info />,
    },
    {
        key: '2',
        label: `FAQ`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `Complaints and Feedback`,
        children: `Content of Tab Pane 3`,
    },
    {
        key: '4',
        label: `Privacy Policy`,
        children: `Content of Tab Pane 4`,
    },
    {
        key: '5',
        label: `Terms & Conditions`,
        children: `Content of Tab Pane 5`,
    },
];


const About = () => {
    const [verified, setVerified] = useState(false);
    const [openInput, setOpenInput] = useState(false);
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti molestiae iure,");
    const onChange = (key) => {
    };
    const handleVerify = () => {
        setVerified(true);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
        setOpenInput(false);
    }
    const handleInput = () => {
        setOpenInput(true);
    }
    if (verified) {
        var verifiedStyle = {
            fontSize: "20px", opacity: "1", color: "blue"
        }
    }
    else {
        verifiedStyle = {
            fontSize: "20px", opacity: "0.5"
        }
    }

    return (
        <div className="about">
            <div style={{ fontSize: "24px", fontWeight: "600" }} >About Us</div>
            <div className="aboutus-logo-row">
                <div style={{ display: "flex", border: "1px solid #f4f4f4", borderRadius: "50px", width: "60px", height: "60px", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ height: "50px", width: "50px" }} src={Logo} alt="logo" />
                </div>
                <div className="about-company">
                    <div style={{ fontSize: "24px", fontWeight: "600" }}>A.T. INKS</div>
                    <div style={{ fontSize: "18px", fontWeight: "500", color: "grey" }}>Digital Inks</div>
                </div>
                <div className="about-verify">
                    <div className="verify-icon"><MdVerified style={verifiedStyle} /></div>
                    {!verified && <div style={{ textDecoration: "underline", color: "skyblue", cursor: "pointer" }} onClick={handleVerify}>Verify Company</div>}
                </div>
            </div>
            {!openInput ?
                <div className="about-desc">
                    <div>{description}</div>
                    <div style={{ marginLeft: "10px", marginTop: "-5px" }} ><MdModeEditOutline style={{ color: "#c90000", cursor: "pointer" }} onClick={handleInput} /></div>
                </div> :
                <div className="about-desc">
                    <TextArea defaultValue={description} onPressEnter={(e) => handleDescription(e)} />
                </div>
            }
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default About;