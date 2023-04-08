import { Card, Space } from 'antd';
import { MdModeEditOutline } from "react-icons/md"
import { TiContacts } from 'react-icons/ti';
import { HiMail } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci'
import { AiFillInstagram } from 'react-icons/ai';
import './Cards.css';

const { Meta } = Card;

const Cards = ({ cardData, contactCard, showDrawer }) => {
    return (
        <Card bodyStyle={{ padding: "15px" }} style={{ width: 300 }}>
            <Meta title={<div className="Card">
                <Space>
                    <div style={{ display: "flex" }}><TiContacts style={{ fontSize: "23px", opacity: "0.5" }} /></div>
                    <div className="card-title">{cardData.cardTitle}</div>
                </Space>
                <div className="edit-icon"><MdModeEditOutline style={{ color: "#c90000", cursor: "pointer" }} onClick={() => showDrawer(cardData.cardTitle)} /></div>
            </div>} />
            {cardData.cardTitle === "Contact" && <div>
                <Space>
                    <HiMail style={{ opacity: "0.5" }} />
                    <div className="email">
                        <div>{contactCard[0].mail} {contactCard[0].altMail && "/"} </div>
                        <div>{contactCard[0].altMail && contactCard[0].altMail}</div>
                    </div>
                    {contactCard.length - 1 !== 0 ? <div className="count" onClick={() => showDrawer("Contact")}>+ {contactCard.length - 1}</div> : null}
                </Space>
                <Space>
                    <FaPhoneAlt style={{ opacity: "0.5", marginTop: "15px" }} />
                    <div className="mobile">{contactCard[0].mobile} {contactCard[0].altMobile && "/"} {contactCard[0].altMobile && contactCard[0].altMobile}</div>
                </Space>
            </div>
            }
            {cardData.cardTitle === "Address" && <div className="address">
                <div>C-1 / 351 /4 , GIDC Makapura,</div>
                <div>Vadadora - 390010, Gujarat, India.</div>
            </div>}
            {cardData.cardTitle === "Hours of operation" && <div className="hours">
                <div>Monday To Friday - 09:00 Am To 06:00Pm</div>
            </div>}
            {cardData.cardTitle === "Social Media & Links" && <div className="social-icons">
                <div className="icons">
                    <CiGlobe style={{ fontSize: "23px", opacity: "0.5" }} />
                    <div className="icon-name">Website</div>
                </div>
                <div className="icons">
                    <AiFillInstagram style={{ fontSize: "23px", opacity: "0.5" }} />
                    <div className="icon-name">Instagram</div>
                </div>
                <div className="icons">
                    <FaFacebook style={{ fontSize: "23px", opacity: "0.5" }} />
                    <div className="icon-name">Facebook</div>
                </div>
                <div className="icons">
                    <FaTwitter style={{ fontSize: "23px", opacity: "0.5" }} />
                    <div className="icon-name">Twitter</div>
                </div>
            </div>}
            {cardData.cardTitle === "Statement" && <div className="statements">
                <div >You think it we Ink it.</div>
                <div className="count">+ 1</div>
            </div>}
        </Card>
    )
}

export default Cards;