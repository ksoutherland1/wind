import { Link, Route, Routes } from "react-router-dom";


function About(props) {
    return (
        <div>
            <nav>
                <Link to='/List/*'>HomePage</Link>
            </nav>
            <main>
                <h2>About</h2>
                <Routes>
                    <Route path="./Homepage.js"></Route>
                </Routes>
            </main>
        </div>
    );
}

export default About;