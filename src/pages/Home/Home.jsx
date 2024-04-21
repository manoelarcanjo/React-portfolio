import styles from '../../styles/Home/Home.module.css'
import Header from '../../components/sections/Header'
import Footer from '../../components/sections/Footer'
import Button from '../../components/elements/Button'
import imagemManoel from '../../assets/images/home.png'
import TypingAnimation from '../../components/elements/TypingAnimation';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";


function Home () {
    const developerTypes = ["Front-end", "Back-end", "Full-stack"];

    return (
        <section>
            <Header />

            <div className={styles.home}>
                <div className={styles.text}>
                    <h2>Olá, Pessoas!</h2>
                    <h1>Sou Manoel Arcanjo</h1>
                    <h3> Desenvolvedor <TypingAnimation texts={developerTypes} speed={300}/> </h3>

                    <p className={styles.p}>
                    “A arte de programar consiste em organizar e dominar a complexidade.” <br/>
                    Edsger W. Dijkstra
                    </p>

                    <div className={styles.button}>
                        <Button name='About me'/>
                    </div>

                    <div className={styles.icons}>
                        <ul>
                            <li><FaGithub/></li>
                            <li><FaLinkedinIn/></li>
                            <li><FaInstagram/></li>
                            <li><FaWhatsapp/></li> 
                        </ul>
                    </div>

                </div>

                <div className={styles.img}>
                    <img src={imagemManoel} alt="imagem de Manoel Aranjo" />
                </div>
            </div>

            <Footer/>
        </section>
    )
}

export default Home