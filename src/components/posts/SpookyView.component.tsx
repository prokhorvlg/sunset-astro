import { PICKUP_ID } from "@/components/common/Pickup.component"
import TransitionGradient from "@/components/home/TransitionGradient.component"
import { faFloppyDisk, faLocationDot, faQuestionCircle, faXmark } from "@fortawesome/free-solid-svg-icons"
import {faFile}  from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

interface Props {
    secretPosts: {
        post: {
            slug: string
            data: {
                id: string
            }
        },
        processedThumbImage: null,
        searchData: string
    }[]
}

const SpookyView = ({
    secretPosts
}: Props) => {
    // Does the user have the disk?
    const [hasSecurityDisk, setHasSecurityDisk] = useState(false)
    // Has the user inserted the disk?
    const [isInsertedDisk, setIsInsertedDisk] = useState(false)
    // The input value
    const [fileNameInput, setFileNameInput] = useState("")
    // The currently matched filename, if it exists
    const [foundFileName, setFoundFileName] = useState("")
    const [foundFileSlug, setFoundFileSlug] = useState("")

    // Check certain things on load...
    useEffect(() => {
        // Has security disk?
        if (localStorage.getItem(PICKUP_ID) === "true") {
            setHasSecurityDisk(true)
        }
    }, [])

    // Match the filename.
    useEffect(() => {
        let found = false
        secretPosts.forEach((post) => {
            if (fileNameInput.toLowerCase() === post.post.data.id.toLowerCase()) {
                setFoundFileSlug(post.post.slug)
                setFoundFileName(fileNameInput)
                found = true
            }
        })
        if (!found) setFoundFileSlug("")
    }, [fileNameInput])

    const insertSecurityDisk = () => {
        setIsInsertedDisk(true)
    }

    return (
        <div className="spooky-view">
            <TransitionGradient 
                direction="to-top" 
                classes="secret"
                floaterTextLeft="992.0037%%% AVAILABLE"
                floaterTextRight="MUGUANG COMPUTER CORPORATION"
            />
            <div className="spooky-heading-area">
                <article className="spooky-inner markdown">
                    <div className="heading">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                        <p className="eyebrow">secret location</p>
                        <h1 className="title">Closet on the Inner Ring</h1>
                    </div>

                    <p>You enter a small supply closet in the underbelly of Goldspire's inner ring. Something drew you here, something your sensors couldn't understand. All you can be sure of is that it wasn't by random chance.</p>

                    <p>Tucked away into the corner of the dark space, you spot an unusual microcomputer. Seems dangerous to link with this directly. You dust off the keys, ready your physical interfacers, and push the power button.</p>

                    <h3>Muguang E-440 Microcomputer</h3>
                    <blockquote>
                        <p>An unusual device you found in a supply closet.</p>
                    </blockquote>

                    <div className="muguang-pc-image">
                        <img className="computer" src="/images/Muguang_Computer (2).png" width={1000} />
                        { !isInsertedDisk &&
                            <img 
                                className="screen screen-locked" 
                                src="/images/muguang-screen-locked.gif" 
                                width={276} 
                            />
                        }
                        { isInsertedDisk && foundFileSlug === "" &&
                            <img 
                                className="screen screen-awaiting" 
                                src="/images/Muguang_Screen_Awaiting (1).gif" 
                                width={276} 
                            />
                        }
                        { isInsertedDisk && foundFileSlug !== "" &&
                            <img 
                                className="screen screen-found" 
                                src="/images/Muguang_Screen_Found.gif" 
                                width={276} 
                            />
                        }
                    </div>

                    { !isInsertedDisk && 
                        <pre><code>[ Awaiting security disquette ]</code></pre>
                    }
                    { !isInsertedDisk && hasSecurityDisk && 
                        <div className="spooky-button">
                            <button onClick={() => insertSecurityDisk()}>
                                <FontAwesomeIcon icon={faFloppyDisk} className="icon" />
                                <code>Insert the disquette you found.</code>
                            </button>
                        </div>
                    }

                    { isInsertedDisk && 
                        <>
                            <pre><code>Security disk "BROKENDATA-5501" found.<br /><br />[ Enter filename to decrypt... ]</code></pre>
                            <div className="filename-input-container">
                                <input 
                                    className="filename-input"
                                    type="text" 
                                    value={fileNameInput} 
                                    onChange={(e) => setFileNameInput(e.target.value)}
                                    placeholder="Filename"
                                />
                            </div>
                        </>
                    }

                    {
                        isInsertedDisk && foundFileSlug === "" &&
                        <div className="results-container no-results">
                            <FontAwesomeIcon icon={faXmark} className="icon" />
                            <code>NO RESULTS .</code>
                        </div>
                    }
                    {
                        isInsertedDisk && foundFileSlug !== "" &&
                        <div className="results-container found-file">
                            <code>FILE FOUND !</code>
                            <a 
                                className="found-file-link" 
                                href={`/posts/${foundFileSlug}`}
                            >
                                <FontAwesomeIcon icon={faFile} className="icon" />
                                <span>{foundFileName}</span>
                            </a>
                        </div>
                    }
                </article>
            </div>
            <TransitionGradient direction="to-bottom" 
                floaterTextLeft="9189 tb consumed"
                floaterTextRight="disc corruption detected"
                classes="secret"
            />
        </div>
    )
}

export default SpookyView