const Rating = props => {
  const {item, func} = props

  const onRating = () => {
    func(item.ratingId)
  }
  return (
    <li key={item.ratingId}>
      <button onClick={onRating} type="button">
        <img
          className="rating-img"
          alt={`rating ${item.ratingId}`}
          src={item.imageUrl}
        />
      </button>
    </li>
  )
}

export default Rating
