import PropTypes from 'prop-types';
import styles from '../../styles/ButtonW/ButtonW.module.css'

function ButtonW ({name, href}) {
    return (
        <button className={styles.btn}><a href={href} target='_blank'>{name}</a></button>  

    )
}

ButtonW.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default ButtonW