import { useEffect, useState } from 'react'
import { api } from '../services/api'
import ApodCard from '../components/ApodCard'
import ImageModal from '../components/ImageModal'

export default function Gallery() {
  const [items, setItems] = useState([])
  const [days, setDays] = useState(9)
  const [error, setError] = useState('')
  const [modal, setModal] = useState(null)

  useEffect(() => {
    setError('')
    setItems([])
    api.recent(days)
      .then(list => setItems(list))
      .catch(e => setError(e.message))
  }, [days])

  return (
    <div className="container">
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">Recent APODs</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <span className="pill">Count: {days}</span>
            <button className="btn" onClick={() => setDays(d => Math.max(3, d - 3))}>-3</button>
            <button className="btn" onClick={() => setDays(d => Math.min(21, d + 3))}>+3</button>
          </div>
        </div>
        <div className="panel-body">
          {error && <p className="error">{error}</p>}
          {items.length === 0 && !error && <p className="loading">Loading...</p>}
          <div className="grid">
            {items.map(item => (
              <ApodCard key={item.date} item={item} onClick={(it) => setModal(it)} />
            ))}
          </div>
        </div>
      </div>
      <ImageModal item={modal} onClose={() => setModal(null)} />
    </div>
  )
}
