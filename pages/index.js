import classes from '../styles/pages/Home.module.css'
import Event from '../components/Event/Event'
import { getFeaturedEvents } from './api/events'

export default function Home({ featuredEvents }) {

  return (
    <main className={classes.main}>
      <h1>Featured Events</h1>
      <div className="events-container">
        {
          featuredEvents.map(event => <Event key={event.id} {...event} />)
        }
      </div>
    </main>
  )

}
export async function getStaticProps() {
  return {
    props: {
      featuredEvents: getFeaturedEvents()
    }
  }
}