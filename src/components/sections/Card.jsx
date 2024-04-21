import style from '../../styles/Card/Card.module.css'
import ButtonW from '../elements/ButtonW'
import PropTypes from 'prop-types'

function Card ({img, alt, title, p, deploy, document}) {
    return (
        <section className={style.card}>

            <img src={img} alt={alt}/>
            <h2>{title}</h2>
            <p>{p}</p>
            <div className={style.btn}>
                <ButtonW name='Deploy' href={deploy}/>
                <ButtonW name='Documentation' href={document}/>
            </div>
        </section>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    deploy: PropTypes.string.isRequired,
    document: PropTypes.string.isRequired,
}

export default Card