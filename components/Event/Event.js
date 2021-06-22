import classes from './Event.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
import { useRouter } from 'next/router'
const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export default function Event(props) {
    const { imageSrc, title, date, id, address } = props
    const router = useRouter()
    const d = new Date(date)
    const stringDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    function goToEventDetails() {
        router.push(`/event/${id}`)
    }
    return (
        <article className={classes.event}>

            <Image objectFit='cover' width='250' height='200' src={imageSrc} title={title} alt={title} />

            <div className={classes.textContainer}>
                <div>
                    <h3>Name: {title}</h3>
                    <time>{stringDate}</time>
                </div>
                <div>
                    <address>{address}</address>
                    <Button onClick={goToEventDetails}>See event</Button>
                </div>
            </div>
        </article>
    )
}

