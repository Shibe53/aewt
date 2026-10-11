import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/construction">
                <button>Editions</button>
            </Link>
            <Link to="/construction">
                <button>Activities</button>
            </Link>
            <Link to="/construction">
                <button>Info</button>
            </Link>
            <Link to="/construction">
                <button>Contact</button>
            </Link>
        </>
    )
}