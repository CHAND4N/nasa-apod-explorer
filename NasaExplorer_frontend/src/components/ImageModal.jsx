import React from 'react'

export default function ImageModal({ item, onClose }) {
  if (!item) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ fontWeight: 600 }}>{item.title}</div>
            <div style={{ color: '#b5bdca', fontSize: 12 }}>{item.date}</div>
          </div>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          {item.media_type === 'image' ? (
            <img
              src={item.hdurl || item.url}
              alt={item.title}
              className="modal-img"
            />
          ) : (
            <p className="code">This APOD is not an image: {item.media_type}</p>
          )}
          <div className="meta">
            {item.copyright && (
              <span className="pill">© {String(item.copyright).trim()}</span>
            )}
            <span className="pill">Type: {item.media_type}</span>
            <a
              className="pill"
              href={item.hdurl || item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source
            </a>
          </div>
          <p className="explanation">{item.explanation}</p>
        </div>
      </div>
    </div>
  )
}
