import Logo from '../../assets/images/logo.png'
import styles from '../../styles/Footer/Footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <img src={Logo} alt="Logo"/>
            <p>copyright © 2024 | todos os direitos reservados</p>
        </footer>
    ) 
}

export default Footer;