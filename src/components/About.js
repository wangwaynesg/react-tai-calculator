import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4>
                Version 1.0.0
            </h4>
            <p>
                Hi there! This is Wayne :D<br/>Thanks for visiting this Mahjong Tai Calculator.<br/>
                I made this small application to get started with learning ReactJS! <br/><br/>
                You can find me at my&nbsp; 
                <a href="https://www.linkedin.com/in/wangwaynesg/">LinkedIn</a> or&nbsp; 
                <a href="https://github.com/wangwaynesg">Github</a>!<br/>
                Do also check out my <a href="https://wangwaynesg.github.io/">personal website</a>.
            </p>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default About;