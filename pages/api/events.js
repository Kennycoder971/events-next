import fs from 'fs'
import path from 'path'

export function getEventsPath() {
    return path.join(process.cwd(), 'events.json')
}
export function getDummyEvents() {
    const eventsJSON = fs.readFileSync(getEventsPath())
    const events = JSON.parse(eventsJSON)
    return events
}

export function getAllEvents() {
    return getDummyEvents()
}

export function getFeaturedEvents() {
    return getAllEvents().filter(event => event.featured)
}


export function findEventById(eventsArr, id) {
    return eventsArr.find(event => event.id === id)
}

export default function addEvent(req, res) {
    const event = req.body
    const events = getAllEvents()
    const eventsJSON = JSON.stringify([...events, event])
    fs.writeFileSync(getEventsPath(), eventsJSON)
    res.send({ message: 'Good' })
}