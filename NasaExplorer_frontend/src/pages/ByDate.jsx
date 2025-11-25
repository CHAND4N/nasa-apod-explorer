import { useEffect, useState } from 'react'
import { api } from '../services/api'
import DateInput from '../components/DateInput'
import ImageModal from '../components/ImageModal'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

export default function ByDate() {
  const [date, setDate] = useState(todayStr())
  const [data, setData] = useState(null)
  const [modal, setModal] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
    setData(null)
    api.byDate(date)
      .then(d => setData(d))
      .catch(e => setError(e.message))
  }, [date])

  return (
    <div className="container">
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">Browse by Date</div>
          <DateInput value={date} onChange={setDate} max={todayStr()} />
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
