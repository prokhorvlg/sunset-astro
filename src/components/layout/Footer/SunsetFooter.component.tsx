import Button, { ButtonType } from "@/components/common/Button/Button.component"
import LinksSegment from "@/components/layout/common/LinksSegment.component"
import SocialsSegment from "@/components/layout/common/SocialsSegment.component"
import HeaderLink from "@/components/layout/Header/components/HeaderLink.component"
import { CommonLinks, CommonText } from "@/data/Common"
import { faHome, faList, faGamepad } from "@fortawesome/free-solid-svg-icons"
import DotGrid from "../../common/DotGrid.component"

const SunsetFooter = ({ currentPage = '' }) => {
    const gridNumRows = 25
    return (
        
        <div className="sunset-footer-container">
            <div className="sunset-footer-gradient"></div>
            <div className="sunset-footer">
                <div className="content-area">
                    <div className="heading">
                        <DotGrid numRowsInitial={gridNumRows} numRowsMobile={gridNumRows}/>
                        <div className="title-area">
                            <img
                                className="main-logo"
                                src="/images/main-logo-alone.png"
                                height="85"
                                width="85"
                                alt="Main Logo"
                            />
                            <h3>Sunset System</h3>
                            <p>by prokhorVLG*</p>
                        </div>
                        <DotGrid numRowsInitial={gridNumRows} numRowsMobile={gridNumRows}/>
                    </div>
                    <div className="divider"></div>
                    <div className="description">
                        <p className="strong">Sunset System is a showcase of my cassette-futurist world, a place of decaying retrofuturistic dreams and existential machines.</p>
                        <p>During an alternate Space Race, humanity accomplished wonders through steadfast scientific progress, resulting in a beautiful but divided Solar System. After a secretive organization lost control of an experiment to erase conflict as a concept, man vanished from reality altogether.</p>
                        <p>They left behind a civilization of robots, duty-bound to ancient core directives while struggling to comprehend their own emerging consciousness. As machine civilization evolves into something unrecognizable, they continue to hold the memory of mankind dear.</p>
                        <p>* The wonderful people who have supported and helped me realize this project are recognized here.</p>
                    </div>
                </div>
                <div className="alt-area">
                    <div className="links-area">
                        <div className="nav-bar">
                            <h3>Navigation</h3>
                            <div className="divider"></div>
                            <LinksSegment currentPage={currentPage} isFooter />
                        </div>
                        <div className="links-bar">
                            <h3>External Links</h3>
                            <div className="divider"></div>
                            <SocialsSegment currentPage={currentPage} isFooter />
                        </div>
                    </div>
                    <div className="input-area">
                        <h3>Newsletter</h3>
                        <div className="divider"></div>
                        {/*<p>Get updated for every post.</p>
                        <div className="input-row">
                            <input type="text" placeholder="Email Address"/>
                            <Button type={ButtonType.Dialog}><>Submit</></Button>
                        </div>*/}
                        <div className="email-form">
                            <iframe 
                                data-w-type="embedded" 
                                src="https://9yjq.mjt.lu/wgt/9yjq/o18/form?c=91733615" 
                                width="100%" style={{flex: 1}}/>
                            <script type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js"></script>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunsetFooter