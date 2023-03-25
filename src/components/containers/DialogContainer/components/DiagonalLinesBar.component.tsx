interface PropTypes {
    length: number
    classes?: string
}

const DiagonalLinesBar = ({ length, classes }: PropTypes) => {
    return (
        <div className={`diagonal-lines ${classes}`}>
            <div className="line first"></div>
            {Array.apply(0, Array(length)).map(function (x, i) {
                return (<div className="line"></div>)
            })}
            <div className="line last"></div>
        </div>
    )
}

export default DiagonalLinesBar