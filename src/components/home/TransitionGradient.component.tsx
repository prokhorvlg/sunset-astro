import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"

const TransitionGradient = ({
    direction = 'to-bottom',
    id =''
}) => {
    return (
        <FullWidthWrapper classes={`transition-gradient-dialog ${direction}`} width={WrapperMax.MaxWidth} verticalSpacing={0} >
            <div className="main-area-wrapper" id={id}>
                <div className="main-area-top-border"></div>
                <div className={`main-area pull-down`}>
                    <div className="floater left">
                        <span>162k available</span>
                    </div>
                    <div className="floater right">
                        <span>version 4.2 (c) Redmond Cybernetics</span>
                    </div>
                </div>
            </div>
        </FullWidthWrapper>
    )


    return (
        <FullWidthWrapper classes='transition-gradient'>
            <div className={`gradient ${direction}`}></div>
        </FullWidthWrapper>
    )


}

export default TransitionGradient