import React, { useState } from 'react';
import './TopBar.css';

import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

import { TbPointFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Formulario = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuitem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/formularios",
            name: "Formulários",
            icon: <IoDocumentTextSharp />,
            subMenu: [
                {
                    label: "Ensino",
                    path: "/Ensino",
                    icon: <TbPointFilled />,
                },
                {
                    label: "Pesquisa",
                    path: "/Pesquisa",
                    icon: <TbPointFilled />,
                },
                {
                    label: "Extensão",
                    path: "/",
                    icon: <TbPointFilled />
                },
                {
                    label: "Outros",
                    path: "/",
                    icon: <TbPointFilled />,
                }
            ]
        },
        {
            path: "/documentos",
            name: "Documentos",
            icon: <FaFolderOpen />
        },
        {
            path: "/perfil",
            name: "Usuário",
            icon: <FaUser />
        },
        {
            path: "/configuracao",
            name: "Configurações",
            icon: <IoIosSettings />
        }
    ];

    const dropdownStyle = {
        height: isOpen ? '320px' : '0',
        border: isOpen ? '2px solid rgba(255,255,255, 0.3)' : '0px',
        width: isOpen ? '20rem' : '0px',
    };

    const dropdownStyleItem = {
        opacity: isOpen ? '1' : '0'
    };

    return (
        <div className="containerA">
            <div className="topbar">
                <div className="top-section">
                    <div className="divBtnMenu">
                        <IoMenu onClick={toggle} className='btnMenu' />
                        <div className="dropdown-menu" style={dropdownStyle}>
                            {menuitem.map((item, index) => (
                                <div className="btnGeralItem">

                                    <NavLink key={index} to={item.path} className="dropdown-item link">
                                        
                                        <div style={dropdownStyleItem} className="icon">{item.icon}</div>
                                        <div style={dropdownStyleItem} className="textItem">{item.name}</div>
                                                                                
                                    </NavLink>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="divBtnUser">
                        {/* Aqui você pode adicionar o botão do usuário */}
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Formulario;
