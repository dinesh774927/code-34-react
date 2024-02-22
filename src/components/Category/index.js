const Category = props => {
  const {item, func} = props
  const onCategory = () => {
    func(item.categoryId)
  }
  return (
    <li>
      <button onClick={onCategory} type="button">
        <p>{item.name}</p>
      </button>
    </li>
  )
}

export default Category
