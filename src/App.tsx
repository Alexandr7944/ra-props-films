import './App.css'
import Stars from './components/Stars'

function App() {
  return (
    <div className="app">
      <div className="card">
        <img src="../public/62-621471_super-man-png-image-jim-lee-superman-statue.png" alt="Hero" className="card__image" />
        <h2 className="card__title">Hero</h2>
      <Stars count={1} />
      </div>
      <div className="card">
        <img src="../public/62-621471_super-man-png-image-jim-lee-superman-statue.png" alt="Hero" className="card__image" />
        <h2 className="card__title">Hero</h2>
      <Stars count={4} />
      </div>
      <div className="card">
        <img src="../public/62-621471_super-man-png-image-jim-lee-superman-statue.png" alt="Hero" className="card__image" />
        <h2 className="card__title">Hero</h2>
      <Stars count={6} />
      </div>
    </div>
  )
}

export default App
