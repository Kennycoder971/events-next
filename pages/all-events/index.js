import { getDummyEvents } from '../api/events'

import classes from '../../styles/pages/AllEvents.module.css'
import Event from '../../components/Event/Event'

export default function AllEventsPage({ events }) {

    return (
        <main className={classes.main}>
            <h1>All Events</h1>

            {
                events.map(event => <Event key={event.id} {...event} />)
            }
        </main>
    )
}


export async function getStaticProps() {
    return {
        props: {
            events: getDummyEvents()
        }
    }
}