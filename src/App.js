import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
 




function App() {

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);


  const fetchImages = async () =>{
    setLoading(true)

    let url;

    const urlPage = `&page=${page}`;

    url = `${mainUrl}${clientID}${urlPage}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      // pass data to photos state
      setPhotos((oldPhotos) => {
        return [...oldPhotos, ...data]
      });
      // stop the loading
      setLoading(false);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImages();
  }, [page])


  useEffect(() => {
    const event = window.addEventListener('scroll', () =>{
      // console.log(`innerHeight ${window.innerHeight}`);
      // console.log(`scrollY ${window.scrollY}`);
      // console.log(`body height ${window.document.body.scrollHeight}`);

      if(!loading && (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 500){
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    });

    // remove the event
    return () => window.removeEventListener('scroll', event);
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');

  }



  return <main>
    <section className="search">
      <form className='search-form'>

        <input type="text" placeholder='search' className='form-input' />

        <button type="submit" className='submit-btn' onClick={handleSubmit}>
          <FaSearch />
        </button>

      </form>
    </section>

    <section className='photos'>
      <div className="photos-center">
      {photos.map((image, index) => {
        // console.log(image)
            return <Photo key={index} {...image} />
          })}
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
    </section>
  </main>
}



export default App
