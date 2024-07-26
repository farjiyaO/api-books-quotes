import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
      <h3>Dive into the World of</h3>
      <h1>Books & Quotes Treasury</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto corporis nemo perferendis qui? Molestias, voluptatum quibusdam sint corporis labore aut beatae impedit quaerat facere aliquam incidunt nostrum nulla rem?
      </p>
      <button className="btn"> <Link className="btn-link" to="/books">Let's Go ⮕</Link> </button>
    </div>
  )
}

export default Home;