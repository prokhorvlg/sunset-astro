import { PICKUP_ID } from "@/components/common/Pickup.component"
import { useEffect } from "react"

const RedirectSecret = ({
    postType = ''
}) => {
    // Check certain things on load...
    useEffect(() => {
        // Has security disk?
        if (postType === 'secret' && !localStorage.getItem(PICKUP_ID)) {
            location.href = '/posts'
        }
    }, [])
    
    return null
}

export default RedirectSecret