import Articles from "../components/home/Articles";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import Heading from "../components/home/Heading";
import {Helmet,} from "react-helmet-async";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Statistics from "../components/home/Statistics";

const Home = () => <>
    <Helmet>
        <title>Nathan Wick</title>
        <meta name="description" content="My name is Nathan Wick and I am a Software Developer specializing in Web, iOS, and Android application development. This website displays my story and how I can help your business." />
        <meta name="robots" content="index, follow" />
    </Helmet>
    <Heading />
    <Statistics />
    <Education />
    <Experience />
    <Projects />
    <Articles />
    <Skills />
</>;

export default Home;
