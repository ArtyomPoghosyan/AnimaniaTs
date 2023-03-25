

import { About } from "../about"
import { CarouselSlider } from "../carousel-slider/carousel"
import { Contact } from "../contact"
import { Partners } from "../partners"
import { Projects } from "../projects"
import { Team } from "../team"


export const Main: React.FC = () => {
    return (
        <div style={{}}>
            <CarouselSlider />
            <About />
            <Projects />
            <Team />
            <Partners />
            <Contact />
        </div>
    )
}