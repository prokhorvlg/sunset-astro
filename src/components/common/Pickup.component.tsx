import { useState, useEffect } from "react";
import { getImageById }  from '@/data/sharedImages';
import MuguangDisc from '@/assets/images/Muguang_Disc.png'

export const PICKUP_ID = "pickup"

const Pickup = () => {
    const [isPickedUp, setIsPickedUp] = useState(false);

    useEffect(() => {
        // On load, check if pickup is true
        const currentPickup = localStorage.getItem(PICKUP_ID)
        if (currentPickup) {
            setIsPickedUp(true)
        }
    }, [])

    const onClick = () => {
        localStorage.setItem(PICKUP_ID, "true")
        setIsPickedUp(true)
    }
    if (isPickedUp) {
        return (
            <div className="pickup-disc-container picked-up">
                <button className="pickup-disc-button">
                    <img src={MuguangDisc.src} className="pickup-disc-image" width="800" />
                    <span className="pickup-disc-title">You took the floppy disk</span>
                    <span className="pickup-disc-title bottom">well done</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className="pickup-disc-container">
                <button onClick={() => onClick()} className="pickup-disc-button">
                    <img src={MuguangDisc.src} className="pickup-disc-image" width="800" />
                    <span className="pickup-disc-title">Take the floppy disk</span>
                    <span className="pickup-disc-title bottom">You must take it</span>
                </button>
            </div>
        )
    } 
}

export default Pickup