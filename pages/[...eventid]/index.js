import { getAllEvents } from '../api/events';
import Image from 'next/image'
import classes from '../../styles/pages/EventPage.module.css'
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm";
import { Fragment } from "react";
import CommentSection from '../../components/CommentSection/CommentSection'
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

export default function EventDetails({ event }) {

    if (!event) {
        return <h2>Loading ...</h2>
    }
    const d = new Date(event.date)
    const stringDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <Fragment>
            <main className={classes.main}>
                <h1>{event.title}</h1>
                <Image height={500} width={700} src={event.imageSrc} />
                <time>Date: {stringDate}</time>
                <address>Address: {event.address}</address>
                <p>Description: {event.description}</p>
            </main>
            <CommentSection comments={event.comments || []} />
            <AddCommentForm />
        </Fragment>
    )
}


export async function getStaticProps(context) {

    const eventId = context.params.eventid[1]
    const event = getAllEvents().find(event => event.id === +eventId)
    return {
        props: {
            event: event,
        },
        revalidate: 10
    }
}


export async function getStaticPaths(context) {
    const paths = getAllEvents().map(event => ({ params: { eventid: [event.id.toString()] } }))
    return {
        paths: paths,
        fallback: true
    }
}
