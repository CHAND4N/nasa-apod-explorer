export default function ApodCard({ item, onClick }) {
  const clickable = item.media_type === 'image'

  return (
    <div
      className="card"
      onClick={() => clickable && onClick?.(item)}
      style={{ cursor: clickable ? 'pointer' : 'default' }}
    >
      {item.media_type === 'image' ? (
        <img src={item.url} alt={item.title} loading="lazy" />
      ) : (
        <div style={{ height: 220, display: 'grid', placeItems: 'center' }}>
          <span className="code">media: {item.media_type}</span>
        </div>
      )}

      <div className="card-content">
        <div className="card-title">{item.title}</div>
        <div className="card-sub">{item.date}</div>
      </div>
    </div>
  )
}
