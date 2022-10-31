import "./Nav.css"

export default function Nav() {
    return (
        <>
            <nav className="global-container bg-grey">
                <span className="logo"></span>
                <ul id="nav-marker" className="flex-row flex-gap-32 grid-end no-mp nav-list">
                    <li><a className="link" data-target="services">Services</a></li>
                    <li><a className="link" data-target="why-us">Why Us</a></li>
                    <li><a className="link" data-target="testimonial">Testimonial</a></li>
                    <li><a className="link" data-target="faq">FAQ</a></li>
                    <li><button className="btn btn-success">Register</button></li>
                </ul>
                <button
                    id="sidebar-toggle"
                    className="menu-toggle"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <img src="/img/icon-burger.svg" width="24" height="24" alt="" />
                </button>
            </nav>

            <div
                id="offcanvasRight"
                class="flex-column flex-gap-16 offcanvas offcanvas-end"
                tabindex="-1"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="flex-row">
                    <span class="body-bold">BCR</span>
                    <button
                        id="sidebar-exit"
                        class="menu-exit-toggle no-mp"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <img src="/img/icon_x.svg" width="24" height="24" alt="" />
                    </button>
                </div>
                <ul id="sidebar-marker" class="flex-column flex-gap-16 grid-end no-mp">
                    <li><a class="link" data-target="services">Services</a></li>
                    <li><a class="link" data-target="why-us">Why Us</a></li>
                    <li><a class="link" data-target="testimonial">Testimonial</a></li>
                    <li><a class="link" data-target="faq">FAQ</a></li>
                    <li><button class="btn btn-success">Register</button></li>
                </ul>
            </div>
        </>
    )
}