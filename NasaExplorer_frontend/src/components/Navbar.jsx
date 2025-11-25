export default function Navbar({ current }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span>NASA APOD Explorer</span>
          <span className="badge">APOD</span>
        </div>
        <div className="nav-links">
          <a href="#/" className={current === 'today' ? 'active' : ''}>Today</a>
          <a href="#/date" className={current === 'date' ? 'active' : ''}>By Date</a>
          <a href="#/gallery" className={current === 'gallery' ? 'active' : ''}>Gallery</a>
        </div>
      </div>
    </nav>
  )
}
