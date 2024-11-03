import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to the To-Do App</h1>
      <p>An organizational tool</p>
      <div className="home-links">
        <Link to="/users" className="home-button">Go to User Page</Link>
      </div>
    </div>
  );
}
export default HomePage;