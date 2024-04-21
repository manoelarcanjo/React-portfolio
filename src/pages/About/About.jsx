import Footer from "../../components/sections/Footer"
import Header from "../../components/sections/Header"
import styles from '../../styles/About/About.module.css'
import aboutimg from '../../assets/images/about.png'
import Title from "../../components/elements/Title"
import Button from "../../components/elements/Button"

function About () {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../../public/curriculo.pdf'; // Caminho para o currículo no diretório público
        link.download = 'curriculo.pdf';
        link.click();
      };

    return (
        <section>
            <Header/>

            <div className={styles.about}>
                <div className={styles.abtimg}>
                    <img src={aboutimg} alt="Imagem Manoel Arcanjo" />
                </div>

                <div className={styles.abtsection}>
                    <Title title="About Me"/>
                    <p>
                        Meu nome é Manoel Arcanjo e sou um estudante de Análise e Desenvolvimento de Sistemas na Uninassau. Além disso, estou me dedicando à Formação em Tecnologia pela Escola DNC e ao curso de desenvolvimento front-end oferecido pela Vai na Web. Minha jornada tem sido uma busca constante por conhecimento e aprimoramento, onde cada desafio que enfrento é uma oportunidade de crescimento. Minha paixão pelo desenvolvimento web me impulsiona a explorar novos horizontes e expandir minhas habilidades em linguagens de programação, frameworks e ferramentas relacionadas. Estou motivado pelo desejo de contribuir significativamente em projetos, seja criando interfaces intuitivas e funcionais ou colaborando em soluções inovadoras. Estou sempre aberto a novas ideias, colaborações e desafios que possam ampliar meu conhecimento e me permitir evoluir profissionalmente. Acredito firmemente que o desenvolvimento web é uma área em constante evolução e estou comprometido em acompanhar esse ritmo, buscando oportunidades para me destacar e agregar valor onde quer que eu esteja. Com uma mentalidade voltada para a resolução de problemas e uma sede insaciável por aprendizado, estou confiante de que posso contribuir de forma significativa para projetos inovadores e desafiadores no mundo do desenvolvimento front-end.
                    </p>
                    <Button name="Download CV" onClick={handleDownload} />
                </div>
            </div>

            <Footer/>
        </section>
    )
}

export default About;