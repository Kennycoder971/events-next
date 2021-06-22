import classes from '../../styles/pages/AddEvent.module.css'
import AddEventForm from '../../components/AddEventForm/AddEventForm'

export default function AddEventPage() {
    return (
        <main className={classes.main}>
            <h1>Add an Event</h1>
            <AddEventForm />
        </main>
    )
}
