import { useEffect, useState } from "react";
import {
  Search,
  Shield,
  Home,
  Phone,
  Users,
  Briefcase,
  Scale,
  UserCheck,
  Shield as BoardIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { t } from "../i18n/translations";

export default function Navbar() {
  const [language, setLanguage] = useState(() => localStorage.getItem("app_lang") || "EN");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    localStorage.setItem("app_lang", language);
  }, [language]);

  const navTabs = [
    { key: "home", path: "/", icon: Home },
    { key: "police", path: "/police-officers", icon: UserCheck },
    { key: "jjBoard", path: "/jj-board", icon: BoardIcon },
    { key: "ngo", path: "/ngo-officials", icon: Briefcase },
    { key: "social", path: "/social-workers", icon: Users },
    { key: "jjAct", path: "/jj-act", icon: Scale },
    { key: "contacts", path: "/contacts", icon: Phone },
  ];

  const languages = [
    { code: "EN", label: "EN" },
    { code: "HI", label: "हिंदी" },
    { code: "MR", label: "मराठी" },
  ];

  return (
    <header className="gov-navbar">
      <div className="gov-navbar-inner">
        <div className="brand-row">
          <div className="brand-left">
            <div className="shield">
              <Shield size={26} className="shield-icon" />
            </div>
            <div className="brand">{t(language, "IMP PROJECT")}</div>
          </div>

          <div className="lang-top-right" aria-hidden>
            {languages.map((l, i) => (
              <span key={l.code} className="lang-item" onClick={() => setLanguage(l.code)}>
                <span className={language === l.code ? "lang-selected" : ""}>{l.label}</span>
                {i < languages.length - 1 && <span className="lang-sep">|</span>}
              </span>
            ))}
          </div>
        </div>

        <nav className="gov-nav">
          <div className="gov-nav-links">
            {navTabs.map(({ key, path, icon: Icon }) => (
              <NavLink
                key={key}
                to={path}
                className={({ isActive }) => `gov-nav-link ${isActive ? "active" : ""}`}
              >
                <Icon size={16} className="nav-icon" />
                <span className="nav-text">{t(language, key)}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className={`gov-search-wrap ${isSearchFocused ? "focused" : ""}`}>
          <div className="gov-search-inner">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={t(language, "searchPlaceholder")}
              className="gov-search-input"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
