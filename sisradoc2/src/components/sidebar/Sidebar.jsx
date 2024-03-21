import React, { useState } from 'react';
import './Sidebar.css';

import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
// import { VscDebugBreakpointLog } from "react-icons/vsc";
// import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { TbPointFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


const Formulario = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [showSubSubmenu, setShowSubSubmenu] = useState(false);
    const [currentSubMenu, setCurrentSubMenu] = useState(null);
    const [currentSubSubMenu, setCurrentSubSubMenu] = useState(null);

    const toggle = () => setIsOpen(!isOpen);
    const toggleSubmenu = (index) => {
        setCurrentSubMenu(index);
        setCurrentSubSubMenu(null); // Reset the subsubmenu state when a new submenu is clicked
        setShowSubmenu(!showSubmenu);
    };

    const toggleSubSubmenu = (index) => {
        setCurrentSubSubMenu(index);
        setShowSubSubmenu(!showSubSubmenu);
    };

    const [isRotated, setIsRotated] = useState(false);

    const handleRotate = () => {
        setIsRotated(!isRotated);
    };

    const menuitem = [
        {
            path:"/home",
            name:"Home",
            icon: <FaHome />
        },
        {
            path: "/formularios",
            name: "Formulários",
            icon: <IoDocumentTextSharp />,
            subMenu: [
                {
                    label: "Ensino",
                    path: "/ensino",
                    icon: <TbPointFilled />,
                    // subSubMenu: [
                    //     { label: "Orientacão", path: "/formularios/a/a1" , icon: <VscDebugBreakpointLogUnverified />,},
                    //     { label: "Publicados", path: "/formularios/a/a2" , icon: <VscDebugBreakpointLogUnverified />},
                    //     { label: "A3", path: "/formularios/a/a3" , icon: <VscDebugBreakpointLogUnverified />}
                    // ]   
                },
                {
                    label: "Pesquisa",
                    path: "/pesquisa",
                    icon: <TbPointFilled />,
                    // subSubMenu: [
                    //     { label: "B1", path: "/formularios/b/b1" },
                    //     { label: "B2", path: "/formularios/b/b2" }
                    // ]
                },
                {
                    label: "Extensão",
                    path: "/extensao",
                    icon: <TbPointFilled />
                },
                {
                    label: "Gestão",
                    path: "/gestao",
                    icon: <TbPointFilled />
                },
                {
                    label: "Outros",
                    path: "#" ,
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
        },
        {
            path:"/",
            name:"Sair",
            icon: <LuLogOut />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "260px" : "80px" }} className="sidebar">
                <div className="top-section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>Sisradoc</h1>
                    <IoMenu style={{ marginLeft: isOpen ? "80px" : "0px" }} onClick={toggle} className='toggle-btn' />
                </div>

                <div className="list">
                    {menuitem.map((item, index) => (
                        <div key={index}>
                            {item.subMenu ? (
                                <>
                                    <div onClick={() => toggleSubmenu(index)} className="links">
                                        {/* <div className="icon">{item.icon}</div>
                                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div> */}

                                        <div className="btnGeral" >
                                            <NavLink to={item.path} className="linkAlternativo" activeClassName="active">

                                                <div className="icon">{item.icon}</div>
                                                <div className="sub-icon" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>

                                            </NavLink>


                                            <div onClick={() => toggleSubSubmenu(index)} className="linkSubAlternativo" 
                                            style={{ display: isOpen ? "block" : "none" }} 
                                            >
                                                <div className="sub-icon" onClick={handleRotate}
                                                style={{ 
                                                    transform: isRotated ? 'rotate(-90deg)' : 'none',
                                                    transition: 'transform 0.5s ease-in-out' // Adicionando uma transição suave
                                                  }}>❮</div>
                                            </div>

                                        </div>

                                    </div>
                                    {showSubmenu && currentSubMenu === index && (
                                        <div className="submenu">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <div key={subIndex} >

                                                    <div className="btnGerals" style={{ display: isOpen ? "block" : "none" }}>

                                                        <NavLink to={subItem.path} className="link" activeClassName="active" >

                                                            <div className="icon">{subItem.icon}</div>
                                                            <div className="sub-icon" >{subItem.label}</div>

                                                        </NavLink>


                                                        {/* <div onClick={() => toggleSubSubmenu(subIndex)} className="linkSub">
                                                            <div className="sub-icon">+</div>
                                                        </div> */}

                                                    </div>

                                                    {subItem.subSubMenu && (
                                                        <div>
                                                            
                                                            {showSubSubmenu && currentSubSubMenu === subIndex && (
                                                                <div className="subsubmenu">
                                                                    {subItem.subSubMenu.map((subSubItem, subSubIndex) => (
                                                                        <NavLink key={subSubIndex} to={subSubItem.path} className="link" activeClassName="active">
                                                                            <div className="icon">{subSubItem.icons}</div>
                                                                            <div className="sub-sub-text">{subSubItem.label}</div>
                                                                        </NavLink>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink to={item.path} className="link" activeClassName="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </NavLink>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Formulario;