import './index.css'
import {FaSearch} from 'react-icons/fa'
import Category from '../Category'
import Rating from '../Rating'

const FiltersGroup = props => {
  const {
    categoryList,
    ratingList,
    search,
    funcSearch,
    funcCategory,
    funcRating,
    funcClear,
    onChange,
  } = props

  const onCategory = value => {
    console.log(value)
    funcCategory(value)
  }

  const onSearch = event => {
    funcSearch(event.target.value)
  }

  const keyEnter = event => {
    if (event.key === 'Enter') {
      onChange()
    }
  }

  const onRating = value => {
    funcRating(value)
  }
  const onClear = () => {
    funcClear()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          onChange={onSearch}
          value={search}
          className="input"
          type="search"
          placeholder="Search"
          onKeyDown={keyEnter}
        />
        <FaSearch className="search -logo" />
      </div>
      <h1>Category</h1>
      <ul>
        {categoryList.map(each => (
          <Category item={each} key={each.categoryId} func={onCategory} />
        ))}
      </ul>
      <h1>Rating</h1>
      <ul>
        {ratingList.map(each => (
          <Rating item={each} func={onRating} key={each.ratingId} />
        ))}
      </ul>
      <button onClick={onClear} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
