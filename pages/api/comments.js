import fs from 'fs'
import { findEventById, getAllEvents, getEventsPath } from "./events";

function addComment(eventId, comment) {
  const allEvents = getAllEvents()
  const event = findEventById(allEvents, eventId)
  if (!event.comments) {
    event.comments = []
  }
  event.comments.push(comment)
  fs.writeFileSync(getEventsPath(), JSON.stringify(allEvents))
  console.log('triggred');
}
export default (req, res) => {
  const { id: eventId, name, comment: text } = req.body
  const comment = { name, text }
  addComment(eventId, comment)
  console.log('the event id', eventId);

  res.status(200).json({ message: 'hi' })
}