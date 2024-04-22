import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import Title from "../../components/elements/Title";
import styles from '../../styles/Contact/Contact.module.css'
import Formulario from "../../components/sections/Formulario";

function Contact () {
    return (
        <section>
            <Header/>
            <div className={styles.form}>
                <Title title="Contact Us"/>

                <div className={styles.forms}>
                    <Formulario/>
                </div>

            </div>
            <Footer/>
        </section>
    )
}

export default Contact;