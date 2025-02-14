import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>JWT Authentication</h1>
            <nav>
                <Link to="/register">Register</Link> | 
                <Link to="/login">Login</Link> | 
                <Link to="/protected">Protected</Link>
            </nav>
        </div>
    );
}

export default App;
