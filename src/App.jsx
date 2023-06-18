import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import Location from './components/Location'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import Errors from './components/Errors'
import { FaSearch } from 'react-icons/fa'


function App() {
  const [location, setLocation] = useState()
  const [input, setInput] = useState('')
  const [suggestionList, setSuggestionList] = useState()
  const [haserror, SethasError] = useState(false)

  // la aplicacion empieza con una location ramdom 
  useEffect(() => {
    let id = getRandomNumber()

    if (input) { id = input }

    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        SethasError(false)
        setLocation(res.data)
      })
      .catch(err =>
        SethasError(true)
      )

  }, [input])





  //================buscar por ID===================
  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(e.target.locationid.value)

    return setSuggestionList()
  }

  //=================buscar por location==================
  const handleChange = e => {
    if (e.target.value === '') {
      return setSuggestionList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
    axios.get(URL)
      .then(res => setSuggestionList(res.data.results))
      .catch(err => console.log(err))
  }


  return (
    <div className="App">

      <div className='app_container'>
        <div className='title_and_form'>

          <h1>Rick and Morty</h1>

          <form className='app_form' onSubmit={handleSubmit}>
            <div className='input_button'>
              <input
                className='app_input'
                id='locationid'
                type="text"
                placeholder='Search by name location or ID  0-126 '
                onChange={handleChange}
              />
              <button className='app_button_search'><FaSearch /></button>
            </div>

            {suggestionList ?
              <FilterList
                suggestionList={suggestionList}
                setInput={setInput}
                setSuggestionList={setSuggestionList}
              /> : <i></i>
            }
          </form>


        </div>

        {
          haserror ? <Errors /> :
            <>

              <Location
                location={location} />


              <div className='cards_residents'>
                {

                  location?.residents.map(url => (
                    <CardResident
                      key={url}
                      url={url}
                    />

                  ))

                }
              </div>
            </>
        }
      </div>


    </div>


  )
}

export default App
