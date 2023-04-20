const TagStrategy = {
    'post-mankind': "post-mankind existentialism",
    'retro-dreams': "retrofuturistic dreams",
    'core-mystery': "mystery of man's departure"
}

const TagCloud = ({
    tags
}) => {
    return (
        <div className="tag-cloud">
            {tags.map((tag) => (
                <span key={tag} className={`tag ${tag}`}>{TagStrategy[tag] || tag}</span>
            ))}
        </div>
    )
}

export default TagCloud