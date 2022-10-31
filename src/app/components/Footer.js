import "./Footer.css"

export default function Footer() {
    return (
        <footer class="global-container">
            <ul class="flex-column flex-gap-16 no-mp">
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
            </ul>
            <ul id="footer-nav-marker" class="flex-column flex-gap-16 no-mp">
                <li>
                    <a class="link body-bold" data-target="services">Our services</a>
                </li>
                <li><a class="link body-bold" data-target="why-us">Why Us</a></li>
                <li>
                    <a class="link body-bold" data-target="testimonial">Testimonial</a>
                </li>
                <li><a class="link body-bold" data-target="faq">FAQ</a></li>
            </ul>
            <div class="flex-column flex-gap-16">
                <p class="no-mp">Connect with us</p>
                <div class="flex-row flex-gap-16">
                    <a href="https://www.facebook.com/">
                        <img draggable="false" src="/img/icon_facebook.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img draggable="false" src="/img/icon_instagram.png" alt="" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img draggable="false" src="/img/icon_twitter.png" alt="" />
                    </a>
                    <a href="https://www.gmail.com/">
                        <img draggable="false" src="/img/icon_mail.png" alt="" />
                    </a>
                    <a href="https://www.twitch.tv/">
                        <img draggable="false" src="/img/icon_twitch.png" alt="" />
                    </a>
                </div>
            </div>
            <div class="flex-column flex-gap-16">
                <p class="no-mp">Copyright Binar 2022</p>
                <div class="logo"></div>
            </div>
        </footer>
    )
}