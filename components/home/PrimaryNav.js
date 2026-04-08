'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './HomePage.module.css';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' }
];

export default function PrimaryNav({ navLogo, orderUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 820) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.brandRow}>
        <a href="#top" className={styles.wordmark} aria-label="The Duke's home" onClick={closeMenu}>
          <Image src={navLogo} alt="The Duke's logo" width={208} height={86} priority className={styles.navLogo} />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a className={styles.secondaryButton} href={orderUrl} target="_blank" rel="noreferrer">
            Order Pickup
          </a>
          <a className={styles.primaryButton} href="#locations">
            Get Directions
          </a>
        </div>

        <button
          type="button"
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.mobileMenuButtonOpen : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-main-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.mobileMenuButtonLabel}>{isMenuOpen ? 'Close' : 'Menu'}</span>
          <span className={styles.mobileMenuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={`${styles.mobileMenuPanel} ${isMenuOpen ? styles.mobileMenuPanelOpen : ''}`} id="mobile-main-menu">
        <nav className={styles.mobileNav} aria-label="Mobile primary">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.mobileMenuActions}>
          <a className={styles.secondaryButton} href={orderUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Order Pickup
          </a>
          <a className={styles.primaryButton} href="#locations" onClick={closeMenu}>
            Get Directions
          </a>
        </div>
      </div>
    </header>
  );
}
