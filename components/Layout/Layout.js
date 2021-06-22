import classes from './Layout.module.css'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Layout({ children }) {
    return (
        <Fragment >
            <header className={classes.header}>
                <Link href='/'>
                    <a className={classes.link}>Home</a>
                </Link>
                <Link href='/all-events'>
                    <a className={classes.link}>All Events</a>
                </Link>
                <Link href='/add-event'>
                    <a className={classes.link}>Add Event</a>
                </Link>
            </header>
            <div className={classes.container}>
                {children}
            </div>
            <footer className={classes.footer}>
                <p>Site created by Kenny Delver</p>
            </footer>
        </Fragment>
    )
}
