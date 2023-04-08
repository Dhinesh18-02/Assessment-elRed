import { useState, useRef, useEffect } from 'react';
import { Drawer, Button, Space, Card, Form, Input, message } from 'antd';
import { MdModeEditOutline } from "react-icons/md"
import { TiContacts } from 'react-icons/ti';
import { HiMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { IoAddCircleOutline } from 'react-icons/io5';
import './SideDrawer';

const { Meta } = Card;

const SideDrawer = ({ title, openDrawer, contactCards, showDrawer, handleDelete, onClose, handleForm }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [add, setAdd] = useState(false);
    const [addMobile, setAddMobile] = useState(false);
    const contactForm = useRef(null);

    useEffect(() => {
        setAddMobile(false);
        setAdd(false);
    }, [])

    const handleAdd = (e) => {
        if (e === 'mail') {
            setAdd(true);
        }
        if (e === "mobile") {
            setAddMobile(true);
        }
    }
    const handleRemove = (e) => {
        if (e === "mail") {
            setAdd(false);
        }
        if (e === "mobile") {
            setAddMobile(false);
        }
    }

    const handleSave = () => {
        const finalData = {
            mail: contactForm.current.getFieldValue(['mail']) || null,
            altMail: contactForm.current.getFieldValue(['altMail']) || null,
            mobile: contactForm.current.getFieldValue(['mobile']) || null,
            altMobile: contactForm.current.getFieldValue(['altMobile']) || null,
        }
        if (finalData.mail !== null && finalData.mobile !== null) {
            contactForm.current.resetFields();
            setAddMobile(false);
            setAdd(false);
            handleForm(finalData);
            messageApi.open({
                type: 'success',
                content: 'Contact Added Successfully!',
                duration: 1,
            });
            // showDrawer("Contact")
        } else {
            messageApi.open({
                type: 'error',
                content: `Add Atleast ${finalData.mail === null ? "1 Email Id" : ""} ${finalData.mail === null && finalData.mobile === null ? "&" : ""} ${finalData.mobile === null ? "1 Contact Number" : ""}`,
                duration: 1,
            });
        }
    }

    return (
        <Drawer width={500} headerStyle={{ display: "none" }} placement="right" open={openDrawer}>
            {title === "Contact" &&
                <div className="contact-drawer">
                    <div className="drawer-title"><IoMdArrowRoundBack onClick={onClose} style={{ cursor: "pointer" }} /> <span style={{ marginLeft: "20px", marginTop: "-3px", fontWeight: "bold" }}>Contacts</span> </div>
                    <div className="drawer-sub-head">Please provide the company's email & contacts</div>
                    <div className="drawer-card-body">

                        {
                            (contactCards || []).map((item) => {
                                return (
                                    <div className="drawer-contact-card" key={item.key}>
                                        <Card style={{ width: "100%" }} bodyStyle={{ padding: "15px" }}>
                                            <Meta title={<div className="drawer-Card">
                                                <Space>
                                                    <div style={{ display: "flex" }}><TiContacts style={{ fontSize: "20px", opacity: "0.5" }} /></div>
                                                    <div className="drawer-card-title">{item.title}</div>
                                                </Space>
                                                <div className="card-side-icons">
                                                    <div className=""><RiDeleteBin5Fill style={{ color: "c90000", cursor: "pointer" }} onClick={() => handleDelete(item)} /></div>
                                                    <div className=""><MdModeEditOutline style={{ color: "c90000", cursor: "pointer" }} onClick={() => showDrawer("edit-contact")} /></div>
                                                </div>
                                            </div>} />
                                            <Space>
                                                <HiMail style={{ opacity: "0.5", marginTop: "20px", marginLeft: "5px" }} />
                                                <div className="drawer-email">
                                                    <div>{item.mail} {item.altMail && `/ ${item.altMail}`} </div>
                                                </div>
                                            </Space>
                                            <Space>
                                                <FaPhoneAlt style={{ opacity: "0.5", marginTop: "15px", fontSize: "12px", marginLeft: "8px" }} />
                                                <div className="drawer-mobile">{item.mobile} {item.altMobile && `/ ${item.altMobile}`}</div>
                                            </Space>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Button style={{ width: "100%", color: "white", backgroundColor: "#92000a", height: "40px" }}>Save</Button>
                    </div>
                </div>
            }
            {title !== "Contact" && title !== "edit-contact" && <div className="contact-drawer">
                <div className="drawer-title"><IoMdArrowRoundBack onClick={onClose} style={{ cursor: "pointer" }} /> <span style={{ marginLeft: "20px", marginTop: "-3px", fontWeight: "bold" }}>{title}</span> </div>
            </div>}
            {title === "edit-contact" &&
                <div className="contact-drawer">
                    <div className="drawer-title"><IoMdArrowRoundBack onClick={() => showDrawer("Contact")} style={{ cursor: "pointer" }} /> <span style={{ marginLeft: "20px", marginTop: "-3px", fontWeight: "bold" }}>Contacts</span> </div>
                    <div className="drawer-sub-head">Please provide the company's email & contacts</div>
                    <div className="drawer-card-body">
                        {contextHolder}
                        <div className="drawer-form">
                            <Form
                                name="basic"
                                requiredMark={false}
                                ref={contactForm}
                                layout="vertical"
                                initialValues={{
                                    remember: true,
                                }}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email ID"
                                    name="mail"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email ID!',
                                        },
                                    ]}
                                >
                                    <Input style={{ backgroundColor: "#f0f0f0", border: '1px solid #f0f0f0' }} placeholder="eg. salesteam@br.in " />
                                </Form.Item>
                                <Form.Item
                                    name="altMail"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email ID!',
                                        },
                                    ]}
                                >
                                    <div>
                                        {add && <div style={{ display: add ? "block" : "none" }}>
                                            <Input style={{ backgroundColor: "#f0f0f0", border: '1px solid #f0f0f0', width: 'calc(100% - 50px)' }} placeholder="eg. salesteam@br.in " />
                                            <AiOutlineMinusCircle style={{ fontSize: "20px", opacity: "0.5", position: "relative", top: '4px', left: '10px', cursor: "pointer" }} onClick={() => handleRemove("mail")} />
                                        </div>
                                        }
                                        {!add && <div className="drawer-add-button">
                                            <Button style={{ width: "100%", backgroundColor: "#fde0e0", border: "1px solid #fde0e0", color: "#c90000", display: "flex", justifyContent: "center", alignItems: "center", height: "40px", margin: "10px 0px" }} onClick={() => handleAdd("mail")} > <IoAddCircleOutline style={{ position: "relative", right: "3px" }} /> Add More</Button>
                                        </div>}
                                    </div>
                                </Form.Item>


                                <Form.Item
                                    label="Contact Number"
                                    name="mobile"
                                    required={false}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your mobile number!',
                                        },
                                    ]}
                                >
                                    <Input style={{ backgroundColor: "#f0f0f0", border: '1px solid #f0f0f0' }} placeholder="eg. 8511591740" />
                                </Form.Item>
                                <Form.Item
                                    name="altMobile"
                                    required={false}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your mobile number!',
                                        },
                                    ]}
                                >
                                    <div>
                                        {addMobile && <div style={{ display: addMobile ? "block" : "none" }}>
                                            <Input style={{ backgroundColor: "#f0f0f0", border: '1px solid #f0f0f0', width: 'calc(100% - 50px)' }} placeholder="eg. 8511591740" />
                                            <AiOutlineMinusCircle style={{ fontSize: "20px", opacity: "0.5", position: "relative", top: '4px', left: '10px', cursor: "pointer" }} onClick={() => handleRemove("mobile")} />
                                        </div>
                                        }
                                        {!addMobile && <div className="drawer-add-button">
                                            <Button style={{ width: "100%", backgroundColor: "#fde0e0", border: "1px solid #fde0e0", color: "#c90000", display: "flex", justifyContent: "center", alignItems: "center", height: "40px", margin: "10px 0px" }} onClick={() => handleAdd("mobile")} > <IoAddCircleOutline style={{ position: "relative", right: "3px" }} /> Add More</Button>
                                        </div>}
                                    </div>
                                </Form.Item>

                            </Form>
                        </div>
                    </div>
                    <div>
                        <Button type="submit" style={{ width: "100%", color: "white", backgroundColor: "#92000a", height: "40px" }} onClick={handleSave}>Save</Button>
                    </div>
                </div>
            }
        </Drawer>
    )
}

export default SideDrawer;