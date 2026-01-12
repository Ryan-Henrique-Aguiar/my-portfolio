import NavBar from "../../components/NavBar/NavBar"
import AboutSection from "./sections/About/AboutSection"
import Hero from "./sections/Hero/Hero"
import ProjectsSection from "./sections/Projects/ProjectsSection"



const Home = () =>{

    return(
        <>
        <NavBar/>
        <Hero/>
        <AboutSection/>
        <ProjectsSection/>
        </>
    )
}
export default Home