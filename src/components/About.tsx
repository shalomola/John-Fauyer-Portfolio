import { ABOUT } from "../constants"

const About = () => {
  return (
    <section id="about" >
        <h2 className="my-10 text-center text-3xl lg:text-8xl uppercase text-lime-300" >About Me</h2>
        <div className="flex items-center justify-center" >
            <p className="mx-8 max-w-7xl text-2xl lg:text-5xl font-extralight lg:leading-normal" >{ABOUT}</p>
        </div>
    </section>
  )
}

export default About