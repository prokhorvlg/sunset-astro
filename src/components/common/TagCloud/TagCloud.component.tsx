const TagStrategy = {
    'post-mankind': "post-mankind existentialism",
    'retro-dreams': "retrofuturistic dreams",
    'core-mystery': "core mystery"
}

// TODO: Add proper tag filtering!
const TagCloud = ({
    tags
}) => {
    const onTagClick = (e, tag) => {
        e.preventDefault()
        console.log("tag click!", tag)        
    }

    return (
        <div className="tag-cloud">
            {tags.map((tag) => (
                <button 
                    key={tag} 
                    className={`tag ${tag}`}
                    onClick={(e) => onTagClick(e, tag)}
                >
                    {TagStrategy[tag] || tag}
                </button>
            ))}
        </div>
    )
}

export default TagCloud