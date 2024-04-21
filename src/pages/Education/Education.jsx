import Title from "../../components/elements/Title";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import styles from '../../styles/Education/Education.module.css'

function Education () {
    return (
        <section>
            <Header/>
            
            <div className={styles.educ}>
                <Title title="Education"/>

                <div className={styles.education}>

                </div>
            </div>

            <Footer/>
        </section>
    )
}

export default Education;