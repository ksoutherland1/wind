import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import List from "./List/List";


function Homepage(props) {
    
    return (
        <div>
            {/* <h1>Welcome!</h1> */}
            <Link to='/List/List'>Wind in the Gorge</Link>
            <Link to='/About'>About</Link>
            <Routes>
                <Route path='*' element={<List />} />
                <Route path='/about' element={<About />} />
            </Routes>            
        </div>
    );
}

export default Homepage;