import ReactMarkdown from 'react-markdown'
import Modal from 'react-modal';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@stitches/react';

import './OrganizationsList.scss'
import DiagonalPattern from '@/components/special/patterns/DiagonalPattern';
import { Organizations, RobotExampleType, type Organization, type RobotExample } from '@/data/organizations';

// sort by:
// - affiliation
// - name
// search by: words

const ColoredButton = styled('button', {});
const ModalContent = styled('article', {});

const OrganizationsList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState<Organization | null>(null);

    // Are the secret texts revealed?
    const [isBasedOnRevealed, setIsBasedOnRevealed] = useState(false)

    useEffect(() => {
        if (modalIsOpen) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'unset';
        }
      }, [modalIsOpen]); 

    return (
        <>
            <div className="organizations-list">
                {Organizations
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((org) => {
                        return (
                            <ColoredButton 
                                key={org.id}
                                className={`org-item ${org.affiliation}`} 
                                onClick={()=> {
                                    setModalData(org);
                                    setModalIsOpen(true);
                                }}
                                css={{
                                    '&:hover, &:focus': {
                                        borderColor: `${org.color} !important`,
                                        background: `linear-gradient(to bottom, transparent, ${org.color}44) !important`,
                                        '.name': {
                                            color: `${org.color} !important`
                                        }
                                    },
                                }}
                            >
                                <div className="organizations-top-bar">
                                    <p className="type">{org.type}</p>
                                    <p className="affiliation">{org.affiliation}</p>
                                </div>
                                <div className="organizations-logo-container">
                                    <Logo org={org} />
                                </div>
                                <h3 className={`name`}>{org.name}</h3>
                            </ColoredButton>
                        )
                })}
                <Modal 
                    appElement={document.getElementById('root') as HTMLElement}
                    isOpen={modalIsOpen} 
                    onRequestClose={() => setModalIsOpen(false)}
                    overlayClassName="organizations-modal-overlay"
                    className="organizations-modal-content"
                >
                    <DiagonalPattern color={modalData?.color} width={80} className="diagonal left" />
                    <DiagonalPattern color={modalData?.color} width={80} className="diagonal right" />
                    <div className="top-area">
                        <h1 style={{color: modalData?.color ? modalData.color : "" }}>{modalData?.name}</h1>
                        <button className="close" onClick={() => setModalIsOpen(false)}><FontAwesomeIcon icon={faClose} /></button>
                    </div>
                    <div className="organizations-top-bar">
                        <p className="type">{modalData?.type}</p>
                        <p className={`affiliation ${modalData?.affiliation ? modalData.affiliation : ""}`}>{modalData?.affiliation}</p>
                    </div>
                    {modalData?.basedOn && 
                        <div className="noetic">
                            <p className="head">PROJECT DEEP SYNE: Noetic trace investigated</p>
                            <p className="">This organization may have been <span className="based-on">{modalData.basedOn}</span> in previous iterations</p>
                        </div>
                    }
                    <div className="organizations-logo-container">
                        <Logo org={modalData} />
                    </div>
                    <ModalContent className="content markdown" css={{
                        'strong': {
                            color: `${modalData?.color} !important`,
                            filter: `brightness(110%)`
                        },
                        "h2": {
                            color: `${modalData?.color} !important`,
                            filter: `brightness(110%)`,
                            borderBottomColor: `${modalData?.color} !important`
                        },
                        "li": {
                            "&::marker": {
                                color: `${modalData?.color} !important`,
                            }
                        },
                        "a": {
                            color: `${modalData?.color} !important`,
                            filter: `brightness(110%)`,
                            "&::before": {
                                backgroundColor: `${modalData?.color} !important`,
                                opacity: 0.3
                            }
                        }
                    }}>
                        <ReactMarkdown>{modalData?.description || ""}</ReactMarkdown>
                        {modalData?.examples &&
                            <>
                                <h2>Examples</h2>
                                <ul className="examples">
                                    {modalData?.examples.map((example) => {
                                        return (
                                            <Example key={example.name} example={example} />
                                        )
                                    })}
                                </ul>
                            </>
                        }
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}

const Logo = ({org}) => {
    return (
        <>
            {org.image ?
                <img className="logo" src={org.image || ""} /> :
                <p className="no-logo">/ NO LOGO FOUND /</p>
            }
        </>
    )
}

interface ExampleProps {
    example: RobotExample
}

const Example = ({
    example
}: ExampleProps) => {
    if (example.type === RobotExampleType.Link) {
        return (
            <li>
                <a href={example.target} target="_blank">{example.name}</a>
                {example.description && 
                    <p className="description">{example.description}</p>
                }
            </li>
        )
    } else {
        return (
            <>abc</>
        )
    }
    
}

export default OrganizationsList