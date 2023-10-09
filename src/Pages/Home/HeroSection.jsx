export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Priyanshu Negi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            currently learning to create 3D visual effects.
            <br />
            And the ins and outs of Frontend
          </p>
        </div>
        <div className="btn-container">
          <a href="https://www.linkedin.com/in/priyanshu-negi-613344227/"><button className=" btn1 btn btn-primary  ">Get In Touch</button></a>
        </div>
      </div>
    
      <div className="hero--section--img flex items-center justify-center ">
        <img src="https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg" alt="Hero Section" className="hero-img" />
      
        
      </div>
    </section>
  );
}
