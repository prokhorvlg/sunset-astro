import { useState, useEffect } from 'react';
import { ScrollParallax } from 'react-just-parallax';

const HomeBanner = ({
    lazarusImageSrc,
    shroomyImageSrc,
    marvinImageSrc,
    heroBgSrc
}) => {
    // No parallax on mobile view
    const noParallaxCutoff = 1000;
    const [isParallaxing, setIsParallaxing] = useState(true);
  
    useEffect(() => {
      const updateParallaxing = () => {
        if (window.innerWidth < noParallaxCutoff) {
            setIsParallaxing(false);
        } else {
            setIsParallaxing(true);
        }
      };
      updateParallaxing();
      window.addEventListener("resize", updateParallaxing);
      return () => window.removeEventListener("resize", updateParallaxing);
    }, []);

    const lazarus = (
        <div className="parallaxing-image hero-lazarus"
        style={{
            backgroundImage: `url('${lazarusImageSrc}')`
        }} />
    )

    const shroomy = (
        <div className="parallaxing-image hero-shroomy"
        style={{
            backgroundImage: `url('${shroomyImageSrc}')`
        }} />
    )

    const marvin = (
        <div className="hero-marvin"
        style={{
            backgroundImage: `url('${marvinImageSrc}')`
        }} />
    )

    return (
        <div className="sunset-banner-container">
            <div className="sunset-banner">
                {/* Just an orange backing */}
                <div className="layer sunset-banner-deep-background"></div>
                
                {/* Big robot on left, lazarus */}
                {isParallaxing ?
                    <ScrollParallax isAbsolutelyPositioned strength={0.2} lerpEase={1}>
                        {lazarus}
                    </ScrollParallax> 
                    : lazarus
                }

                {/* Robot on right, shroomy */}
                {isParallaxing ?
                    <ScrollParallax isAbsolutelyPositioned strength={0.14} lerpEase={1}>
                        {shroomy}
                    </ScrollParallax>
                    : shroomy
                }
                
                <div className="layer sunset-under-front"></div>
                <div 
                    className="layer sunset-white-grad"
                    style={{
                        backgroundImage: `url('${heroBgSrc}')`
                    }}
                />

                {/* Robot in the middle of screen */}
                {isParallaxing ?
                    <ScrollParallax isAbsolutelyPositioned strength={0.08} lerpEase={1}>
                        {marvin}
                    </ScrollParallax>
                    : marvin
                }

                {/* The computers nearest us */}
                <div className="layer foreground"></div>
                <div className="layer topground"></div>                
                
                <div className="floating-header">
                    <h1 style={{textAlign: "center"}}>Sunset System</h1>
                    <span className="subtext"><span className="slashes">//</span><span className="text">Vigil for a Lost Future</span><span className="slashes">//</span></span>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner

{/*<ScrollParallax isAbsolutelyPositioned strength={0.4} lerpEase={1} enableOnTouchDevice={false}>
                    <div className="layer sunset-banner-deep-background"></div>
                </ScrollParallax>
                
                <ScrollParallax isAbsolutelyPositioned strength={0.3} lerpEase={1}enableOnTouchDevice={false}>
                    <div className="layer sunset-hero-left"></div>
                </ScrollParallax>

                <ScrollParallax 
                    isAbsolutelyPositioned 
                    strength={0.25} 
                    lerpEase={1}
                    enableOnTouchDevice={false}
                >
                    <div className="layer sunset-hero-right"></div>
                </ScrollParallax>
                
                <div className="layer sunset-under-front"></div>
                <div className="layer sunset-white-grad"></div>
                <ScrollParallax isAbsolutelyPositioned strength={0.2} lerpEase={1} enableOnTouchDevice={false}>
                    <div className="layer sunset-hero-front"></div>
                </ScrollParallax>

                <div className="layer foreground"></div>
                <div className="layer topground"></div>
            
            
            
            
            {isParallaxing ?
                    <ScrollParallax isAbsolutelyPositioned strength={isParallaxing ? 0.2 : 0} lerpEase={1} enableOnTouchDevice={isParallaxing}>
                    <div className="parallaxing-image hero-lazarus"
                        style={{
                            backgroundImage: `url('${lazarusImageSrc}')`
                        }} />
                </ScrollParallax> :
                    <div className="parallaxing-image hero-lazarus"
                    style={{
                        backgroundImage: `url('${lazarusImageSrc}')`
                    }} />
                }*/}