const Pickup = () => {
    const onClick = () => {
        localStorage.setItem("pickup", "true")
    }
    return <button onClick={() => onClick()}>pick up</button>
}

export default Pickup