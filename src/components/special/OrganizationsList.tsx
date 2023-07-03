import ReactMarkdown from 'react-markdown'
import Modal from 'react-modal';

import { Organization, Organizations } from "@/data/organizations"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@stitches/react';


// sort by:
// - affiliation
// - name
// search by: words

const ColoredButton = styled('button', {});
const ModalContent = styled('div', {});

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
                <div className="top-area">
                    <h1 style={{color: modalData?.color ? modalData.color : "" }}>{modalData?.name}</h1>
                    <button className="close" onClick={() => setModalIsOpen(false)}><FontAwesomeIcon icon={faClose} /></button>
                </div>
                <div className="organizations-top-bar">
                    <p className="type">{modalData?.type}</p>
                    <p className={`affiliation ${modalData?.affiliation ? modalData.affiliation : ""}`}>{modalData?.affiliation}</p>
                </div>
                {modalData?.basedOn && 
                    <p>this organization is an alternate timeline version of {modalData.basedOn}</p>
                }
                <div className="organizations-logo-container">
                    <Logo org={modalData} />
                </div>
                <ModalContent className="content" css={{
                    'strong': {
                        color: `${modalData?.color} !important`,
                        filter: `brightness(110%)`
                    }
                }}>
                    <ReactMarkdown>{modalData?.description || ""}</ReactMarkdown>
                </ModalContent>
            </Modal>
        </div>
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

export default OrganizationsList