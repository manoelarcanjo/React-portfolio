import Educ from "../../components/elements/Educ";
import Title from "../../components/elements/Title";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import styles from '../../styles/Education/Education.module.css'
import uninassau from '../../assets/images/uninassau.svg'
import dnc from '../../assets/images/dnc.svg'
import vainaweb from '../../assets/images/vainaweb.svg'

function Education () {
    return (
        <section>
            <Header/>
            
            <div className={styles.educ}>
                <Title title="Education"/>

                <div className={styles.education}>
                    <Educ img={uninassau} curso="Análise e Desenvolvimento de Sistemas" escola="Uninassau" ano={'2024 - 2025'}/>
                    <Educ img={vainaweb} curso="Desenvolvimento Front-end" escola="Vai na Web" ano={'2023 - 2024'}/>
                    <Educ img={dnc} curso="Formação em Tecnologia" escola="Uninassau" ano={'2024 - 2025'}/>
                </div>
            </div>

            <Footer/>
        </section>
    )
}

export default Education;