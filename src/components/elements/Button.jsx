import PropTypes from 'prop-types';
import styles from '../../styles/Button/Button.module.css'
import { Link } from 'react-router-dom';

function Button ({name, onClick}) {
    return (
        <Link to='/About'>
            <button className={styles.btn} onClick={onClick}>{name}</button>  
        </Link>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button