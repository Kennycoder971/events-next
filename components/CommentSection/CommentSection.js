import Comment from '../Comment/Comment'
import classes from './CommentSection.module.css'

export default function CommentSection({ comments }) {
    return (
        <section className={classes.commentSection}>
            {
                comments.map((comment, index) => <Comment {...comment} key={index} />)
            }
        </section>
    )
}
