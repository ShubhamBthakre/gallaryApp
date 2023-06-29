// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, isSelected, setActiveThumbNailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnail
  const imgClassName = isSelected ? 'opacity' : ''

  const onClickThumbNail = () => {
    setActiveThumbNailId(id)
  }

  return (
    <li key={eachThumbnail.id} className="thumbnail-list-container">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbNail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${imgClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
