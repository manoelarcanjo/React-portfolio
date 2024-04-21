import styles from '../../styles/Tech/Tech.module.css'
import PropTypes from 'prop-types'

function Tech ({tech, alt}) {
    return (
        <div className={styles.tech}>
            <img src={tech} alt={alt}/>
        </div>
    )
}

Tech.propTypes = {
    tech: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Tech