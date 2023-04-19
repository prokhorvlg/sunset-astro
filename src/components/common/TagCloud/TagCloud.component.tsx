const TagStrategy = {
    'post-mankind': "post-mankind existentialism",
    'retro-dreams': "retrofuturistic dreams",
    'enigma-of-humanitys-fate': "enigma of humanity’s fate"
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