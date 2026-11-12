import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom"
import { ScrollTop } from "./components/ScrollTop";

export function Layout() {
    return (
        <>
            <Navbar/>
            <ScrollTop/>
            <main>
                <Outlet/>
                <Footer/>
            </main>
        </>
    )
}