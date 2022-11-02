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

    return (
        <>
            <Nav type="others" />
            <Hero simple={true} />

            <Overlay />

            <section id="search">
                <CarForm parentHandler={handleSubmit} />
                <div id="search-result" className="flex-row flex-gap-24">

                </div>
            </section>

            <Footer type="others" />
        </>
    )
}