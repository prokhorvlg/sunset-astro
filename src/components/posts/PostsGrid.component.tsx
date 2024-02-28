import PostCard from "@/components/posts/PostCard.component"
import type {
  PostType,
  ProcessedPost,
} from "@/types/postTypes"
import {
  faArrowDown,
  faArrowUp,
  faCircleXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useEffect, useState } from "react"

interface PropTypes {}

interface ResultArray {
  year: number
  posts: any[]
}

const POST_TYPES = [
  "lore",
  "announcement",
  "introduction",
  "database",
]

export const PILLAR_TAGS = [
  "post-mankind existentialism",
  "retrofuturistic dreams",
  "core mystery",
]

const PostsGrid = ({
  processedPosts,
  usesFilter = true,
}: {
  processedPosts: ProcessedPost[]
  usesFilter?: boolean
}) => {
  // POSTS GRID
  const [filteredPosts, setFilteredPosts] = useState<
    ProcessedPost[]
  >([])
  const [splitPosts, setSplitPosts] = useState<
    ResultArray[]
  >([])

  const [searchString, setSearchString] = useState("")
  const [activeCollection, setActiveCollection] =
    useState<PostType | null>(null)
  const [activePillar, setActivePillar] = useState<
    string | null
  >(null)
  const [additionalTags, setAdditionalTags] = useState<
    string[]
  >([])
  const [areFiltersOpen, setAreFiltersOpen] =
    useState(false)
  const [galleryMode, setGalleryMode] = useState(true)

  const filterPosts = (
    posts: ProcessedPost[],
    searchString: string
  ) => {
    return posts.filter((i) => {
      const hasSearchData = i.searchData.includes(
        searchString.toLowerCase()
      )
      const matchesCollection =
        activeCollection === null ||
        i.post.collection === activeCollection
      const matchesPillarTag =
        activePillar === null ||
        (i.post.data.tags &&
          i.post.data.tags.includes(activePillar))
      const matchesAdditionalTag =
        additionalTags.length === 0 ||
        (i.post.data.tags &&
          additionalTags.every((r) =>
            i.post.data
              .tags!.filter((r) => !PILLAR_TAGS.includes(r))
              .includes(r)
          ))

      return (
        hasSearchData &&
        matchesCollection &&
        matchesPillarTag &&
        matchesAdditionalTag
      )
    })
  }

  useEffect(() => {
    if (usesFilter) {
      setFilteredPosts(
        filterPosts(processedPosts, searchString)
      )
    } else {
      setFilteredPosts(processedPosts)
    }
  }, [
    searchString,
    activeCollection,
    activePillar,
    additionalTags,
  ])

  useEffect(() => {
    const splitByYear = reduceByYear(filteredPosts)
    setSplitPosts(splitByYear)
  }, [filteredPosts])

  // [ { year: x, posts: [] } ]

  const reduceByYear = (posts) => {
    let result: ResultArray[] = []
    function find(year) {
      for (let i = 0; i < result.length; i++)
        if (result[i].year === year) return result[i]
      return null
    }
    for (var i = 0; i < posts.length; i++) {
      const currentYear =
        posts[i].post.data.pubDate.getFullYear() || 0
      const x = find(currentYear)
      if (x === null) {
        result.push({
          year: currentYear,
          posts: [posts[i]],
        })
      } else {
        x.posts.push(posts[i])
      }
    }

    return result
  }

  const onPostTypeClick = (type: string) => {
    if (activeCollection === type) {
      setActiveCollection(null)
    } else {
      setActiveCollection(type as any)
    }
  }
  const onPillarTagClick = (pillar: string) => {
    if (activePillar === pillar) {
      setActivePillar(null)
    } else {
      setActivePillar(pillar)
    }
  }
  // When normal tag is clicked, just pop it out
  const onTagClick = (tag: string) => {
    setAdditionalTags(
      additionalTags.filter((i) => i !== tag)
    )
  }
  const onCardTagClick = (tag: string) => {
    if (PILLAR_TAGS.includes(tag)) {
      onPillarTagClick(tag)
    } else if (!additionalTags.includes(tag)) {
      setAdditionalTags([...additionalTags, tag])
    }
  }

  return (
    <div className="posts-grid-container">
      {usesFilter && (
        <>
          <button
            className={`open-filters ${
              areFiltersOpen
                ? "filters-open"
                : "filters-closed"
            }`}
            onClick={() =>
              setAreFiltersOpen(!areFiltersOpen)
            }
          >
            {areFiltersOpen ? (
              <span>Filters</span>
            ) : (
              <span>Filters</span>
            )}

            {areFiltersOpen ? (
              <FontAwesomeIcon
                icon={faArrowUp}
                className={`arrow-close`}
              />
            ) : (
              <FontAwesomeIcon
                icon={faArrowDown}
                className={`arrow-open`}
              />
            )}
          </button>
          <div
            className={`posts-filters ${
              areFiltersOpen
                ? "filters-open"
                : "filters-closed"
            }`}
          >
            <div className="tag-clouds">
              <div className="filter-row post-type tag-cloud">
                <span className="row-heading">Type</span>
                {POST_TYPES.map((type) => {
                  const isActive = activeCollection === type
                  return (
                    <button
                      key={type}
                      onClick={() => onPostTypeClick(type)}
                      className={`tag ${type} ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {type}
                      {isActive ? <CloseIcon /> : null}
                    </button>
                  )
                })}
              </div>
              <div className="filter-row post-pillar-tags tag-cloud">
                <span className="row-heading">Pillar</span>
                {PILLAR_TAGS.map((pillar) => {
                  const isActive = activePillar === pillar
                  return (
                    <button
                      key={pillar}
                      onClick={() =>
                        onPillarTagClick(pillar)
                      }
                      className={`tag ${pillar} ${
                        isActive ? "active" : "inactive"
                      }`}
                    >
                      {pillar}
                      {isActive ? <CloseIcon /> : null}
                    </button>
                  )
                })}
              </div>
              <div className="filter-row post-additional-tags tag-cloud">
                <span className="row-heading">Tags</span>
                {additionalTags.map((tag) => {
                  return (
                    <button
                      key={tag}
                      onClick={() => onTagClick(tag)}
                      className={`tag ${tag} active`}
                    >
                      {tag}
                      <CloseIcon />
                    </button>
                  )
                })}
                {additionalTags.length === 0 ? (
                  <span className="none">
                    (none selected)
                  </span>
                ) : null}
              </div>
            </div>

            <div className="post-string">
              <input
                type="text"
                value={searchString}
                onChange={(e) =>
                  setSearchString(e.target.value)
                }
                placeholder="Search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
              />
            </div>
          </div>
        </>
      )}

      {splitPosts.map((splitPostObject) => (
        <React.Fragment key={splitPostObject.year}>
          <h2 className="post-grid-year-title">
            {splitPostObject.year}
          </h2>
          <PostGrid
            galleryMode={galleryMode}
            filteredPosts={splitPostObject.posts}
            onCardTagClick={onCardTagClick}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

const PostGrid = ({
  galleryMode,
  filteredPosts,
  onCardTagClick,
}) => {
  return (
    <div
      className={`posts-grid ${
        galleryMode ? "gallery-mode" : ""
      }`}
    >
      {filteredPosts.map((filteredPost) => {
        return (
          <PostCard
            key={filteredPost.post.slug}
            processedPost={filteredPost}
            onCardTagClick={onCardTagClick}
            galleryMode={galleryMode}
          />
        )
      })}
    </div>
  )
}

const CloseIcon = () => (
  <FontAwesomeIcon
    icon={faCircleXmark}
    className="close-mark"
  />
)

export default PostsGrid
