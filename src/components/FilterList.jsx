import React from 'react'
import '../stylesComponents/FilterList.css'
const FilterList = ({ suggestionList, setInput, setSuggestionList }) => {

  const handleClick = (id) => {
    setInput(id)
    return setSuggestionList()
  }

  return (
    <ul className='suggestions_List'>
      {
        suggestionList?.map(suggest => (
          <li key={suggest.id} onClick={() => handleClick(suggest.id)}>&nbsp;&nbsp;{suggest.name}</li>
        ))}
    </ul>
  )
}

export default FilterList
