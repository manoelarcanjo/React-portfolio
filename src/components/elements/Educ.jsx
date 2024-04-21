import styles from '../../styles/Educ/Educ.module.css'
import PropTypes from 'prop-types'

function Educ ({img, curso, escola, ano }) {
    return (
        <div className={styles.card}>
            <img src={img} alt="" />
            <h3>{curso}</h3>
            <h4>{escola}</h4>
            <p>{ano}</p>
        </div>
    )
}

Educ.propTypes = {
    img: PropTypes.string.isRequired,
    curso: PropTypes.string.isRequired,
    escola: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
}

export default Educ