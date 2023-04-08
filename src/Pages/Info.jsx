import { useState, useEffect } from 'react';
import './Info.css';
import SideDrawer from '../Components/SideDrawer';
import Cards from '../Components/Cards';

const contactData = [
    {
        key: 0,
        title: "Sales Team",
        mail: "salesteam@br.in",
        altMail: "salesteam2@br.in",
        mobile: "+91 8511591740",
        altMobile: "8000058214",

    },
    {
        key: 1,
        title: "Marketing Team",
        mail: "salesteam@br.in",
        altMail: "salesteam@br.in",
        mobile: "+91 8511591740",
        altMobile: "8000058214",

    },
    {
        key: 2,
        title: "Marketing Team",
        mail: "salesteam@br.in",
        altMail: "salesteam@br.in",
        mobile: "+91 8511591740",
        altMobile: "8000058214",

    },

]

const CardData = [
    {
        key: 0,
        cardTitle: "Contact",
    },
    {
        key: 1,
        cardTitle: "Address",
    },
    {
        key: 2,
        cardTitle: "Hours of operation",
    },
    {
        key: 3,
        cardTitle: "Social Media & Links",
    },
    {
        key: 4,
        cardTitle: "Statement",
    },
]

const Info = () => {
    const [open, setOpen] = useState(false);
    const [drawerTitle, setDrawerTitle] = useState();
    const [contactCard, setContactCard] = useState(contactData);
    const [isRemoved, setIsRemoved] = useState(false);


    const showDrawer = (title) => {
        setOpen(true);
        setDrawerTitle(title);

    };
    const onClose = () => {
        setOpen(false);
    };
    const handleDelete = (n) => {
        var arr = contactCard;
        var recToRemove = n;
        arr.splice(arr.indexOf(recToRemove), 1)
        setContactCard(arr);
        setIsRemoved(true);
    }
    useEffect(() => {
        if (isRemoved) {
            setContactCard(contactCard);
            setIsRemoved(false);
        }
    }, [isRemoved, contactCard]);

    const handleForm = (formData) => {
        var formdata = formData;
        formdata.key = Math.random();
        formdata.title = "Sales Team";
        var addedData = [...contactCard]
        addedData.push(formdata);
        if (formdata.mail !== null && formdata.mobile !== null) {
            setContactCard(addedData);
        }
    }

    return (
        <div className="info">
            {CardData.map((cardItems) => {
                return <Cards key={cardItems.key} contactCard={contactCard} cardData={cardItems} showDrawer={title => showDrawer(title)} />
            })}
            {open && <SideDrawer title={drawerTitle} openDrawer={open} contactCards={contactCard} handleDelete={(item) => handleDelete(item)} handleForm={(data) => handleForm(data)} showDrawer={title => showDrawer(title)} onClose={onClose} />}
        </div>
    )
}
export default Info;