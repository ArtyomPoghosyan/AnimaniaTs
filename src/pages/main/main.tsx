import { About } from "../about"
import { CarouselSlider } from "../carousel-slider/carousel"
import { Contact } from "../contact"
import { Footer } from "../footer"

import { FormComponent } from "../form/form"
import { Partners } from "../partners"
import { Projects } from "../projects"

export const Main: React.FC = () => {
    return (
        <div>
            <CarouselSlider />
            <About />
            <Projects />
            <Partners />
            <FormComponent/>
            <Contact />
            <Footer/>
        </div>
    )
}