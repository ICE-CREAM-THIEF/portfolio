import "./hero-section.css"

function HeroSection({ title, image, head, sub, con,  }) {
    return (
        <div className="hero-section" >
            <div className="hero-content">
                <div className="card-v1">
                    <div className="card-img">
                        <div class="img"> 
                            <img src={image} alt={title} />
                        </div>
                        <div className="card-text">
                            <h1>{head}</h1>
                            <h3>{sub}</h3>
                            <p>{con}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;