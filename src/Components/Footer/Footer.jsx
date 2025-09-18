import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const links = [
    { name: "Home", url: "#" },
    { name: "Products", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLinks}>
          {links.map((link, index) => (
            <a key={index} href={link.url} className={styles.footerLink}>
              {link.name}
            </a>
          ))}
        </div>
        <div className={styles.footerCopy}>
          © {currentYear} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
