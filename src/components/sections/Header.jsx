import styles from '../../styles/Header/Header.module.css'
import line from '../../assets/images/line.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Header () {
    const [activeLink, setActiveLink] = useState();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                        <img src={line} alt="linha da logo" />
                    <Link to='/'>
                        <div>
                            <h5>MANOEL ARCANJO</h5>
                            <p>@codearcanjo_dev</p>
                        </div>
                    </Link>
                </div>

                <div className={styles.nav}>
                    <Link to='/'  className={activeLink === '/' ? styles.activeLink : ''} onClick={() => handleLinkClick('/')}>Home</Link>
                    <Link to='/about' className={activeLink === '/about' ? styles.activeLink : ''} onClick={() => handleLinkClick('/about')}>About</Link>
                    <Link to='/education' className={activeLink === '/education' ? styles.activeLink : ''} onClick={() => handleLinkClick('/education')}>Education</Link>
                    <Link to='/skills' className={activeLink === '/skills' ? styles.activeLink : ''} onClick={() => handleLinkClick('/skills')}>Skills</Link>
                    <Link to='/works' className={activeLink === '/works' ? styles.activeLink : ''} onClick={() => handleLinkClick('/works')}>Works</Link>
                    <Link to='/contact' className={activeLink === '/contact' ? styles.activeLink : ''} onClick={() => handleLinkClick('/contact')}>Contact</Link>
                </div>
            </nav>

        </header>
    )
}

export default Header