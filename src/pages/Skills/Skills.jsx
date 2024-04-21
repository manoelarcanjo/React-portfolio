import Tech from "../../components/elements/Tech"
import Footer from "../../components/sections/Footer"
import Header from "../../components/sections/Header"
import styles from '../../styles/Skills/Skills.module.css'
import Title from '../../components//elements/Title'
import html from '../../assets/logos/html.png'
import css from '../../assets/logos/css.png'
import JavaScript from '../../assets/logos/JavaScript.png'
import React from '../../assets/logos/React.webp'
import tailwind from '../../assets/logos/tailwind.png'
import bootstrap from '../../assets/logos/bootstrap.png'
import sass from '../../assets/logos/sass.png'
import github from '../../assets/logos/github.png'
import git from '../../assets/logos/git.png'
import nodejs from '../../assets/logos/nodejs.png'
import Vitejs from '../../assets/logos/Vitejs.svg'
import Vercel from '../../assets/logos/Vercel.png'
import netlify from '../../assets/logos/netlify.png'
import figma from '../../assets/logos/figma.webp'


function Skills () {
    return (
        <section>
            <Header/>
            <div className={styles.skills}>
                <Title title="Skills"/>

                <h2>Technologies</h2>

                <div className={styles.tech}>                
                    <Tech tech={html} alt="html"/>
                    <Tech tech={css} alt="css"/>
                    <Tech tech={JavaScript} alt="js"/>
                    <Tech tech={React} alt="react"/>
                    <Tech tech={tailwind} alt="tailwind"/>
                    <Tech tech={bootstrap} alt="bootstrap"/>
                    <Tech tech={sass} alt="sass"/>
                    <Tech tech={github} alt="github"/>
                    <Tech tech={git} alt="git"/>
                    <Tech tech={nodejs} alt="nodejs"/>
                    <Tech tech={Vitejs} alt="vitejs"/>
                    <Tech tech={Vercel} alt="vercel"/>
                    <Tech tech={netlify} alt="netlify"/>
                    <Tech tech={figma} alt="figma"/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Skills;