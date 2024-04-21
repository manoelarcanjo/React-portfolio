import styles from '../../styles/Title/Title.module.css'
import PropTypes from 'prop-types'

function Title ({title}) {
    return (
        <h2 className={styles.title}>
            {title}
        </h2>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;