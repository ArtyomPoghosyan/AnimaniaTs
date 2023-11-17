import { About } from "../about"
import { Footer } from "../footer"
import { Contact } from "../contact"
import { Partners } from "../partners"
import { Projects } from "../projects"
import { FormComponent } from "../contact-form/form"
import { CarouselSlider } from "../carousel-slider/carousel"

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