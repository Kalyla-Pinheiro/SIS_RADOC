import React, { useState } from 'react';
import './Sidebar.css';
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Formulario = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuitem=[
        {
            path:"/home",
            name:"Home",
            icon: <FaHome />
        },
        {
            path:"/formularios",
            name:"Formulários",
            icon: <IoDocumentTextSharp />
        },
        {
            path:"/documentos",
            name:"Documentos",
            icon: <FaFolderOpen />
        },
        {
            path:"/perfil",
            name:"Usuário",
            icon: <FaUser />
        },
        {
            path:"/configuracao",
            name:"Configurações",
            icon: <IoIosSettings />
        }
    ]

    return (
        <div className="container">
            <div style={{width: isOpen ? "260px" : "80px"}} className="sidebar">
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Sisradoc</h1>     
                    <IoMenu style={{marginLeft: isOpen ? "80px" : "0px"}} onClick={toggle} className='toggle-btn'/> 
                </div>
                
                <div className="list">
                    {
                        menuitem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Formulario;