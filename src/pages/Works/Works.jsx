import Card from "../../components/sections/Card";
import Footer from "../../components/sections/Footer"
import Header from "../../components/sections/Header"
import styles from '../../styles/Works/Works.module.css'
import Title from '../../components//elements/Title'
import Carousel from 'react-elastic-carousel'
import mc from '../../assets/cards/mc.png'
import portreact from '../../assets/cards/portreact.png'
import lptech from '../../assets/cards/lptech.png'
import xmem from '../../assets/cards/x-men.png'



function Works () {
    return (
        <section>
            <Header/>
            <div className={styles.title}>
                <Title title="Works"/>
            </div>

            <Carousel itemsToShow={2} itemsToScroll={2} className={styles.cards}>
                <Card img={mc} title="Landing Page - McDonald’s" p="Landing page criada em React para o desafio 3 da Vai na Web" deploy="https://landing-page-mc-donalds.vercel.app/" document="https://github.com/manoelarcanjo/LandingPage-McDonalds"/>
                <Card img={portreact} title="Portfólio em React" p="Portfólio construido em React em estudos na DNC" deploy="https://portfolioreact-umber.vercel.app/" document="https://github.com/manoelarcanjo/portfolioreact"/>
                <Card img={lptech} title="Landing Page - DNC" p="Landing page construida para divulgação da Formação em Tecnologia" deploy="https://l-pagednc.netlify.app/" document="https://github.com/manoelarcanjo/LandingPage-DNC?tab=readme-ov-file"/>
                <Card img={xmem} title="Seleção de Personagens" p="Site de seleção de personaegens dos x-men construido em JavaScript junto com Dev em Dobro" deploy="https://x-men-mauve.vercel.app/" document="https://github.com/manoelarcanjo/x-men"/>
            </Carousel>


            <Footer/>
        </section>
    )
}

export default Works;