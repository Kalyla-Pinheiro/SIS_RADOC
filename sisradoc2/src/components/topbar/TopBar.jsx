import React, { useState } from "react";
import "./TopBar.css";

import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";

import { TbPointFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

import TokenFunctions from "../../utils/Token";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const Formulario = ({ children }) => {
  const token = TokenFunctions.getToken();

  const nomeUsuario = TokenFunctions.getName(token);
  const emailUsuario = TokenFunctions.getEmail(token);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUser, setIsOpenA] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleUser = () => setIsOpenA(!isOpenUser);

  const toSignout = () => {
    Cookies.remove("jwt");
  };

  const menuitem = [
    {
      path: "/home",
      name: "Home",
      icon: <FaHome />,
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
          icon: <TbPointFilled />,
        },
        {
          label: "Outros",
          path: "/",
          icon: <TbPointFilled />,
        },
      ],
    },
    {
      path: "/documentos",
      name: "Documentos",
      icon: <FaFolderOpen />,
    },
    {
      path: "/relatorios",
      name: "Relatórios",
      icon: <HiMiniDocumentDuplicate />,
    },
  ];

  const menuUserItem = [
    {
      path: "/perfil",
      name: "Usuário",
      icon: <FaUser />,
    },
    {
      path: "/",
      name: "Sair",
      icon: <LuLogOut />,
      onClick: toSignout,
    },
  ];

  const dropdownStyle = {
    height: isOpen ? "280px" : "0",
    border: isOpen ? "2px solid rgba(255,255,255, 0.3)" : "0px",
    width: isOpen ? "20rem" : "0px",
  };

  const dropdownStyleItem = {
    opacity: isOpen ? "1" : "0",
  };

  const dropdownUserStyle = {
    height: isOpenUser ? "240px" : "0",
    border: isOpenUser ? "2px solid rgba(255,255,255, 0.3)" : "0px",
    width: isOpenUser ? "20rem" : "0px",
  };

  const dropdownUserStyleItem = {
    opacity: isOpenUser ? "1" : "0",
  };

  return (
    <div className="containerA">
      <div className="topbar">
        <div className="top-section">
          <div className="ladoBtn">
            <h2>Sisradoc</h2>
          </div>

          <div className="conteiner-menu">
            <nav>
              <ul className="header-menu">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/documentos">Documentos</a>
                </li>
                <li>
                  <a href="/relatorios">Relatórios</a>
                </li>
              </ul>
            </nav>
            <div className="divBtnUser">
              <div className="ajusteBtnUser" onClick={toggleUser}>
                <AiOutlineUser className="btnUser" />
              </div>

              <div className="dropdown-User" style={dropdownUserStyle}>
                <div className="testeUserContent">
                  <h2>{nomeUsuario}</h2>
                  <h4>{emailUsuario}</h4>
                </div>
                {menuUserItem.map((item, index) => (
                  <div className="btnGeralItem">
                    <NavLink
                      key={index}
                      to={item.path}
                      className="dropdown-item link"
                      onClick={item.onClick ? item.onClick : null}
                    >
                      <div style={dropdownUserStyleItem} className="icon">
                        {item.icon}
                      </div>
                      <div style={dropdownUserStyleItem} className="textItem">
                        {item.name}
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Formulario;
