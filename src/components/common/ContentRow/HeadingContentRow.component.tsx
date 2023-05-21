import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import { styled } from '@stitches/react';

const ColorContainer = styled('div', {});

const HeadingContentRow = ({
    children,
    classes = '',
    type = '',
    verticalSpacing,
    color = ''
}) => {
    // Style reserved for home page blippy?
    if (type === 'blips') {
        return (
            <ContentRow classes={`heading-content-row blips ${classes}`} verticalSpacing={verticalSpacing}>
                <div className="heading-content-wrap">
                    <div className="left-box"></div>
                    <div className="heading-box">
                        {children}
                    </div>
                </div>
            </ContentRow>
        )
    }
    // Normal left leaning bar
    if (type === 'grandiose') {
        return (
            <ContentRow classes={`heading-content-row grandiose top-tall ${classes}`} verticalSpacing={verticalSpacing}>
                <div className="heading-content-wrap">
                    <div className="left-box"></div>
                    <div className="heading-box">
                        {children}
                    </div>
                </div>
            </ContentRow>
        )
    }
    if (type === 'world-heading') {
        return (
            <ContentRow classes={`heading-content-row world-heading ${classes}`} verticalSpacing={verticalSpacing}>
                <ColorContainer 
                    css={{
                        'h3, .floater': {
                            color: color
                        },
                        'p': {
                            backgroundColor: color
                        },
                      }}
                >
                    <div className="floater">ASTROSCOPE</div>

                    {children}
                </ColorContainer>
            </ContentRow>
        )
    }
    return (
        <ContentRow classes={`heading-content-row ${classes}`} verticalSpacing={verticalSpacing}>
            <div className="heading-content-wrap">
                <div className="left-box"></div>
                <div className="heading-box">
                    {children}
                </div>
            </div>
        </ContentRow>
    )
}

export default HeadingContentRow