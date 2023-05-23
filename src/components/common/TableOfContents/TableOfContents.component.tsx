import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import {useStickyBox} from "react-sticky-box";

interface Props {
    headings: {
        depth: number,
        slug: string,
        text: string
    }[]
}
const titleRegex = /title:(.*?):/;
const hideRegex = /:hide:/;

const TableOfContents = ({ headings }: Props) => {
    // Contains slug for current active heading
    const [activeHeading, setActiveHeading] = useState<string>("");


    // Add an event listener listening for scroll
    useEffect(() => {
        const articleHeadings = document.querySelectorAll('article h2');
        const handleScroll = () => {
            const bodyTop = document.body.getBoundingClientRect().top
            const scrollPosition = window.scrollY;

            let currentHeading = ''
            articleHeadings.forEach((heading) => {
                const elementTop = heading.getBoundingClientRect().top - bodyTop;
                if (elementTop - 100 < scrollPosition) {
                    currentHeading = heading.id;
                    return
                }
            });
            
            setActiveHeading(currentHeading)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="toc-container">
            <aside className="toc" >
                {headings.length > 0 ? (
                    <h3>Table of Contents</h3>
                ) : null}
                <ul>
                    {headings.map((heading) => {
                        let headingText = heading.text

                        // Hide if available
                        if (hideRegex.exec(headingText)) {
                            return null
                        }

                        // Use title if available
                        const match = titleRegex.exec(headingText)
                        if (match && match.length > 1) {
                            headingText = match[1]
                        }
                        
                        return (
                            <li className={`table-item depth-${heading.depth}`} key={heading.slug}>
                                <a 
                                    href={`#${heading.slug}`} 
                                    className={`${activeHeading === heading.slug ? 'active' : ''}`}
                                ><FontAwesomeIcon icon={faArrowRight} className="active-icon"/><span>{headingText}</span></a>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </div>
    )
}

export default TableOfContents