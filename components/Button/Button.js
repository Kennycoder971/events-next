
import classes from './Button.module.css'

export default function Button({ onClick, children }) {
    return (
        <button className={classes.btn} onClick={onClick && onClick}>
            {children}
        </button>
    )
}
