import { ScrollParallax } from 'react-just-parallax';
const HomeBanner = () => {
    return (
        <div className="sunset-banner-container">
            <div className="sunset-banner">
                <ScrollParallax isAbsolutelyPositioned strength={0.4} lerpEase={2}>
                    <div className="layer sunset-banner-deep-background"></div>
                </ScrollParallax>
                
                <ScrollParallax isAbsolutelyPositioned strength={0.3} lerpEase={2}>
                    <div className="layer sunset-hero-left"></div>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned strength={0.25} lerpEase={2}>
                    <div className="layer sunset-hero-right"></div>
                </ScrollParallax>
                
                <div className="layer sunset-under-front"></div>
                <div className="layer sunset-white-grad"></div>
                <ScrollParallax isAbsolutelyPositioned strength={0.2} lerpEase={2}>
                    <div className="layer sunset-hero-front"></div>
                </ScrollParallax>

                <div className="layer foreground"></div>
                <div className="layer topground"></div>
                
                <div className="floating-header">
                    <h1 style={{textAlign: "center"}}>Sunset System</h1>
                    <span>// &nbsp;&nbsp;Vigil for a Lost Future &nbsp;&nbsp;//</span>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner