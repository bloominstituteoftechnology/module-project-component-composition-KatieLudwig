import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    // fetchPhoto()
    setApod({
      "date": "2024-04-11",
      "explanation": "Start at the upper left above and you can follow the progress of April 8's total eclipse of the Sun in seven sharp, separate exposures. The image sequence was recorded with a telescope and camera located within the narrow path of totality as the Moon's shadow swept across Newport, Vermont, USA. At center is a spectacular view of the solar corona. The tenuous outer atmosphere of the Sun is only easily visible to the eye in clear dark skies during the total eclipse phase. Seen from Newport, the to...",
      "hdurl": "https://apod.nasa.gov/apod/image/2404/2024_Eclipse_05XTan.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Eclipse in Seven",
      "url": "https://apod.nasa.gov/apod/image/2404/2024_Eclipse_05XTan1024.jpg"
    })
  }, [])
  if (!apod) return "fetching photo of the day.."
  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
