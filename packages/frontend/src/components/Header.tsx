import React, { useState, useRef, useEffect } from "react";
import repofyLogo from "../assets/repofy.svg";
import iconInbox from "../assets/inbox-solid.svg";
import userPhoto from "../assets/user-photo.jpg";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const perfilRef = useRef<HTMLDivElement>(null);

  const manipulaDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const identificadorClick = (event: MouseEvent) => {
      if (
        perfilRef.current &&
        !perfilRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", identificadorClick);
    return () => document.removeEventListener("mousedown", identificadorClick);
  }, []);

  const navigate = useNavigate();

  const handleNavigateAndScroll = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0); 
  };

  return (
    <header>
      <div>
        <a onClick={() => handleNavigateAndScroll("/")} className="logo-container">
          <img className="logo-repofy" src={repofyLogo} alt="Repofy logo" />
        </a>
      </div>

      <div className="search-container">
        <input
          id="txtFiltroRepo"
          className="search-input"
          placeholder="Pesquisar..."
        />
      </div>

      <div className="nav-items">
        <a className="btn-inbox">
          <img src={iconInbox} alt="Imbox icon" width={20} />
        </a>
        <div
          className="profile-container"
          onClick={manipulaDropdown}
          ref={perfilRef}
        >
          <img
            className="user-photo"
            src={userPhoto}
            width={24}
            alt="perfil usuário"
          />
          {dropdownOpen && (
            <div className="user-container-items">
              <a onClick={() => handleNavigateAndScroll("profile")}>
                Meu Perfil
              </a>
              <a onClick={() => handleNavigateAndScroll("")}>
                Configurações
              </a>
              <a onClick={() => handleNavigateAndScroll("")}>
                Sair
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
