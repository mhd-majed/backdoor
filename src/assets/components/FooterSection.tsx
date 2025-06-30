import React from "react";

const FooterSection: React.FC = () => {
  return (
    <section className="footerSection">
      <footer className="footer footer-horizontal footer-center bg-pr text-white rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-6 text-xl">
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            © {new Date().getFullYear()} - All rights reserved by ACME
            Industries Ltd.
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default FooterSection;
