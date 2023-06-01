import TransitionGradient from "@/components/home/TransitionGradient.component"
import LinksSegment from "@/components/layout/common/LinksSegment.component"
import SocialsSegment from "@/components/layout/common/SocialsSegment.component"
import DotGrid from "../../common/DotGrid.component"

interface Props {
    currentPage: string
    noGradient?: boolean
    postType?: string
    floaterTextLeft?: string
    floaterTextRight?: string
    gradientClasses?: string
}

const SunsetFooter = ({ 
    currentPage = '', 
    noGradient = false,
    postType,
    floaterTextLeft,
    floaterTextRight,
    gradientClasses
}: Props) => {
    const gridNumRows = 25
    return (
        <div className={`sunset-footer-container ${noGradient ? 'no-gradient' : ''}`}>
            { !noGradient && 
                <TransitionGradient direction="to-bottom" 
                    floaterTextLeft={floaterTextLeft ? floaterTextLeft : "9189 tb consumed"}
                    floaterTextRight={floaterTextRight ? floaterTextRight : "disc corruption detected"}
                    classes={`${postType ? postType : ""} ${gradientClasses ? gradientClasses : ""}`}
                />
            }
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
                        <p className="strong">Sunset System is my cassette-futurist project about a place of decaying retrofuturistic dreams and existential robots.</p>
                        <p>During an alternate Space Race, the world of tomorrow was brute-forced through scientific progress. After an unfortunate experiment, mankind vanished. They left behind their machines to an empty Solar System, struggling to comprehend their own emerging consciousness, and searching for purpose.</p>
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
                            {/*<div className="email-form-embed" dangerouslySetInnerHTML={{ __html: MailchimpEmailForm }}></div>
                            <iframe 
                                data-w-type="embedded" 
                                src="https://9yjq.mjt.lu/wgt/9yjq/o18/form?c=91733615" 
                                width="100%" style={{flex: 1, color: "white"}}/>
                    <script type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js"></script>*/}

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MailchimpEmailForm = `
    
        <div id="mc_embed_signup">
            <form action="https://gmail.us8.list-manage.com/subscribe/post?u=0d610baae3db500c779266023&amp;id=cf022598ec&amp;f_id=000516e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                <h2>Sign up for updates</h2>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                    <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                    <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                </div>
                <div id="mce-responses" className="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0d610baae3db500c779266023_cf022598ec" tabindex="-1" value=""></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                            <p class="brandingLogo"><a href="http://eepurl.com/irKSSg" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    </link>
    `


export default SunsetFooter