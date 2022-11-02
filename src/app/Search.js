import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Overlay from "./components/Overlay";
import CarForm from "./components/Search/CarForm";
import "./Search.css"

export default function Search() {
    const handleSubmit = value => {
        console.log('====================================');
        console.log(value);
        console.log('====================================');
    }

    const [overlayActive, setOverlayActive] = useState(false)

    return (
        <>
            <Nav type="others" />
            <Hero simple={true} />

            <Overlay zIndex={5} active={overlayActive} />

            <section id="search">
                <CarForm parentHandler={handleSubmit} overlayHandler={setOverlayActive} />
                <div id="search-result" className="flex-row flex-gap-24">

                </div>
            </section>

            <Footer type="others" />
        </>
    )
}