import React from 'react'

function About() {
  return (
    <div className="container">
      <div className="about">
        <h1 className="about-title">Github Finder</h1>
        <h3 className="about__post-title">This Web-Project for Testing</h3>
        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas officiis quas voluptatibus molestiae quae? Reiciendis perspiciatis esse exercitationem in autem! Atque aspernatur perferendis, similique modi voluptas, vel pariatur ullam maxime voluptatem tempore maiores.</p>
        <a href="tel:+234234324" className="about-contact"><span>Contact Us: </span> +23423 432 34 54</a>
        <a href="mailto:example@gmail.com" className="about-contact"><span>Contact Us: </span> example@gmail.com</a>
      </div>
    </div>
  )
}

export default About