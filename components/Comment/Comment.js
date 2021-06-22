import classes from './Comment.module.css'
export default function Comment({ name, text }) {
    return (
        <article className={classes.comment}>
            <h4>{name}</h4>
            <p>{text}</p>
        </article>
    )
}
