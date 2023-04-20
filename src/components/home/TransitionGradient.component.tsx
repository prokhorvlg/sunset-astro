import FullWidthWrapper from "@/components/wrappers/FullWidthWrapper.component"

const TransitionGradient = ({
    direction = 'to-bottom'
}) => {
    return (
        <FullWidthWrapper classes='transition-gradient'>
            <div className={`gradient ${direction}`}></div>
        </FullWidthWrapper>
    )
}

export default TransitionGradient