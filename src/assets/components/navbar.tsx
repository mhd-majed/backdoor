import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // Smooth scroll to section by ID
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="navbarSection">
      <div className="navbar bg-pr text-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl" href="#">
            {t("siteName")}
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => scrollToSection("hero")}>{t("nav.item1")}</a>
            </li>

            {/* Submenu using dropdown */}
            <li className="dropdown dropdown-hover">
              <a tabIndex={0} className="cursor-pointer">
                {t("nav.item2")}
              </a>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-pr text-white rounded-box shadow-lg w-52 mt-4 z-[60]"
              >
                <li>
                  <a onClick={() => scrollToSection("usedTechSection")}>
                    {t("nav.submenu.usedTech")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("featuredSection")}>
                    {t("nav.submenu.featured")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("servicesSection")}>
                    {t("nav.submenu.services")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("achievementSection")}>
                    {t("nav.submenu.achievement")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("projectsSection")}>
                    {t("nav.submenu.projects")}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a onClick={() => scrollToSection("contact")}>{t("nav.item3")}</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn" onClick={toggleLanguage}>
            {i18n.language === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
