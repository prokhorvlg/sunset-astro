import QuoteContentRow from "@/components/common/ContentRow/QuoteContentRow.component"
import { AuthorTerminal, AuthorUniserve } from "@/data/Authors"
import { getImageById } from "@/data/sharedImages"
import { useState } from "react"

enum Choice {
    None,
    Yes,
    No
}

const UniserveConclusion = ({
    imageProcessed
}) => {
    const [selectedChoice, setSelectedChoice] = useState(Choice.None)
    return (
        <>
            <QuoteContentRow author={AuthorTerminal} left>
                <>
                    {selectedChoice === Choice.None ?
                        <>
                            <button onClick={() => setSelectedChoice(Choice.Yes)} className="user-choice">[Y]</button>
                            <button onClick={() => setSelectedChoice(Choice.No)} className="user-choice">[N]</button>
                        </> : null
                    }

                    {selectedChoice === Choice.Yes ?
                        <p>[Y] Yes, thank you!</p> : null
                    }

                    {selectedChoice === Choice.No ?
                        <p>[N] I can't wait to get out of here.</p> : null
                    }
                </>
            </QuoteContentRow>

            {selectedChoice === Choice.None ?
                null : null
            }

            {selectedChoice === Choice.Yes ?
                <QuoteContentRow author={AuthorUniserve} imageObject={getImageById("uniserve-welcome-modern")} imageItem={imageProcessed} >
                    <>
                        <p>You're welcome. You've been a wonderful VISITOR.</p>
                        <p>Please enjoy the REMAINING DURATION of your stay!</p>
                    </>
                </QuoteContentRow> : null
            }

            {selectedChoice === Choice.No ?
                <QuoteContentRow author={AuthorUniserve} imageObject={getImageById("uniserve-welcome-modern")} imageItem={imageProcessed} >
                    <>
                        <p>Oh...</p>
                        {/*<p>This unit is sorry to hear that.</p>*/}
                    </>
                </QuoteContentRow> : null
            }
        </>
    )
}

export default UniserveConclusion