import { useEffect } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"

export default function Home() {
    useEffect(() => {
        document.title = "BCR - Binar Car Rental"
    })

    return (
        <>
            <Nav />
            <Hero />
            <Footer />
        </>
    )
}