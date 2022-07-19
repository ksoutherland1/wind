import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import List from "./List";

function Homepage(props) {
    return (
        <div>
            <h1>Welcome!</h1>
            <p>Wind Awaits</p>
            <nav>
                <Link to='/List'>Wind in the Gorge</Link>
                <Link to='/About'>About Us</Link>
            </nav>
            <main>
                <Routes>
                    <Route path='/List' element={<List />} />
                    <Route path='/About' element={<About />} />  
                </Routes>
            </main>
        </div>
    );
}

export default Homepage;