import { Link } from "react-router-dom";

const HomeView = () => {

  return (
    <div className="homeView">
      <h1>Home view</h1>
      <Link to='/about'>Go about</Link>
    </div>
  )

}

export default HomeView;
