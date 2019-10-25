import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <h2 className="homeheader">Meet the developers:</h2>
                <a href="https://nathanielstack.dev/">
                    <h3>Nathaniel Stack</h3></a>
                <p>As a Full-Stack Developer and YouTube creative I bring enduring passion to my every endeavor. A natural born leader, I strive in every situation to lead by example. I am always excited to learn something new and gain diverse perspectives from my coworkers.  I love to explore diverse industries through the lens of software engineering.</p>
                <a href="https://www.linkedin.com/in/shamira-jones/">
                    <h3>Shamira Jones</h3></a>
                <p>Shamira is a Graphic/ Web Designer, Full Stack Web Developer and Guitar player. She loves to turn complex concepts into clean, functional, beautiful realities.Her passion to create is motivated by her belief that part of truly living is to create. </p>
                <a href="https://www.spiano.dev/">
                    <h3>Sarah Panaligan</h3></a>
                <p>Sarah is a full stack software engineer with a relentless work ethic and an exceptional ability to adapt to new environments. She is a self-disciplined, resourceful, and efficient programmer who has an eye for design so the final look of the product is as good as the code within the page. </p>
                <a href="https://www.linkedin.com/in/jopara94/">
                    <h3>James Opara</h3></a>
                <p>James is an energetic software engineer, foodie, music junkie, and self-proclaimed nerd of many disciplines. He's an outgoing, and detail-oriented person who thrives in a team environment, and is always excited to learn, grow and evolve.</p>
            </div>
        );
    }
}