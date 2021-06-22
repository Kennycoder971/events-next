import { useState } from 'react'
import { useRouter } from 'next/router'
import classes from './AddEventForm.module.css'
import Button from '../Button/Button'
import { v4 as uuidv4 } from 'uuid';


export default function AddEventForm() {
    const router = useRouter()
    const [inputs, setInputs] = useState({
        id: uuidv4(),
        imageSrc: '',
        title: '',
        date: '',
        address: '',
        featured: false,
        description: ''
    });
    async function onEventSubmit(e) {
        e.preventDefault()
        await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
        router.push('/')

    }
    return (
        <form className={classes.form} onSubmit={onEventSubmit}>

            <div className={classes.formControl}>
                <label htmlFor="image-url">Image url</label>
                <input
                    type="url"
                    name="image-url"
                    id="image-url"
                    required
                    value={inputs.imageSrc}
                    onChange={e => setInputs({ ...inputs, imageSrc: e.target.value })} />
            </div>
            <div className={classes.formControl}>
                <label htmlFor="title">Event title</label>
                <input
                    required
                    type="text"
                    name="title"
                    id="title"
                    value={inputs.title}
                    onChange={e => setInputs({ ...inputs, title: e.target.value })} />
            </div>
            <div className={classes.formControl}>
                <label htmlFor="address">Address</label>
                <input
                    required
                    type="text"
                    name="address"
                    id="address"
                    value={inputs.address}
                    onChange={e => setInputs({ ...inputs, address: e.target.value })}
                />
            </div>
            <div className={classes.formControl}>
                <label htmlFor="date">Date</label>
                <input
                    required
                    type="Date"
                    name="date"
                    id="date"
                    value={inputs.date}
                    onChange={e => setInputs({ ...inputs, date: e.target.value })}
                />
            </div>
            <div className={classes.formControl}>
                <label htmlFor="description">Description</label>
                <textarea
                    required
                    name="description"
                    id="description"
                    rows="5"
                    value={inputs.description}
                    onChange={e => setInputs({ ...inputs, description: e.target.checked })}></textarea>
            </div>
            <div className={classes.formControl}>
                <label htmlFor="featured">Set featured</label>
                <input
                    required
                    type="checkbox"
                    name="featured"
                    id="featured"
                    value={inputs.featured}
                    onChange={e => setInputs({ ...inputs, featured: e.target.checked })}
                />
            </div>
            <Button>Submit</Button>
        </form>
    )
}
