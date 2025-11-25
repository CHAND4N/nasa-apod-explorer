import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Today from './pages/Today'
import ByDate from './pages/ByDate'
import Gallery from './pages/Gallery'
import './App.css'

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || '#/')
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return route
}

export default function App() {
  const route = useHashRoute()
  const current = route.startsWith('#/gallery')
    ? 'gallery'
    : route.startsWith('#/date')
    ? 'date'
    : 'today'

  return (
    <>
      <Navbar current={current} />
      {current === 'today' && <Today />}
      {current === 'date' && <ByDate />}
      {current === 'gallery' && <Gallery />}
      <div className="footer">
        Built with ❤️ using Spring Boot backend + React frontend
      </div>
    </>
  )
}
