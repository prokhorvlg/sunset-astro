const TagStrategy = {
    'post-mankind existentialism': "post-mankind existentialism",
    'retrofuturistic dreams': "retrofuturistic dreams",
    'core mystery': "core mystery"
}

interface Props {
    tags: string[]
    onCardTagClick?: (arg0: string) => void
}

// TODO: Add proper tag filtering!
const TagCloud = ({
    tags,
    onCardTagClick
}: Props) => {
    const onTagClick = (e, tag) => {
        e.preventDefault()
        console.log("tag click!", tag)

        // If on posts page, affect tag list state
        if (onCardTagClick) onCardTagClick(tag)
        else {
            // If not on posts page, navigate to the posts page with query string
            window.location.href = `/posts?targetTag=${tag}`
        }
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