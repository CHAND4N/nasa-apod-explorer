import { useEffect, useState } from 'react'
import { api } from '../services/api'
import ImageModal from '../components/ImageModal'

export default function Today() {
  const [data, setData] = useState(null)
  const [modal, setModal] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    api.today()
      .then(d => setData(d))
      .catch(e => setError(e.message))
  }, [])

  return (
    <div className="container">
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">Today’s APOD</div>
          {data?.hdurl && (
            <a className="btn btn-primary" href={data.hdurl} target="_blank" rel="noopener noreferrer">View HD</a>
          )}
        </div>
        <div className="panel-body">
          {error && <p className="error">{error}</p>}
          {!data && !error && <p className="loading">Loading...</p>}
          {data && (
            <>
              {data.media_type === 'image' ? (
                <img
                  src={data.url}
                  alt={data.title}
                  className="hero-img"
                  onClick={() => setModal(data)}
                  style={{ cursor: 'zoom-in' }}
                />
              ) : (
                <p className="error">Not an image: {data.media_type}</p>
              )}
              <h2>{data.title}</h2>
              <p className="date">{data.date}</p>
              <p className="explanation">{data.explanation}</p>
            </>
          )}
        </div>
      </div>
      <ImageModal item={modal} onClose={() => setModal(null)} />
    </div>
  )
}
