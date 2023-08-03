import './BuildABot.scss'

const BuildABotForm = () => {
    return (
        <div className="build-a-bot-container">
            <div className="strip">
                <h1 className="main-title">Cybernetic Profile Sheet</h1>
                <p className="subtext">Provided by DYNATEK</p>
            </div>

            <div className="strip">
                <TextInputField text="Designation" id="designation" />
                <SelectInputField />
                <TextAreaInputField />
            </div>
        </div>
    )
}

const TextInputField = ({
    text,
    id
}: {
    text: string,
    id: string
}) => {
    return (
        <div className="">
            <label htmlFor={id}>{text}</label>
            <input name={id} type="text"/>
        </div>
    )
}

const SelectInputField = ({

}) => {
    return (
        <select />
    )
}

const TextAreaInputField = ({

}) => {
    return (
        <textarea />
    )
}

export default BuildABotForm