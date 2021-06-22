import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Button from '../Button/Button'
import classes from './AddCommentForm.module.css'
export default function AddCommentForm() {
    const router = useRouter()
    const formRef = useRef()
    const [inputs, setInputs] = useState({
        id: +router.query.eventid[1],
        name: '',
        comment: ''
    });

    const onSubmit = (e) => {
        e.preventDefault()
        formRef.current.reset()
        fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
        router.reload()
    }
    return (
        <form
            className={classes.form}
            onSubmit={onSubmit}
            ref={formRef}
        >
            <h3>Add a comment</h3>
            <div className={classes.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text"
                    placeholder='Enter your name'
                    name='name'
                    required
                    onInput={e => setInputs({ ...inputs, name: e.target.value })
                    } />
            </div>
            <div className={classes.formControl}>
                <label htmlFor="comment">Comment</label>
                <textarea type="text"
                    placeholder='Enter your comment'
                    name='comment'
                    rows="5"
                    required
                    onInput={e => setInputs({ ...inputs, comment: e.target.value })
                    }>
                </textarea>
            </div>
            <Button >Submit</Button>
        </form>
    )
}
