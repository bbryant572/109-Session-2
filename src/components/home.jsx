import "./home.css"
import {Link} from "react-router-dom";


const Home = () => {


    return (
        <div className="home">
            <div className="home-header">
                <h2>Welcome to the Preimer Spot for Dart Supplies!</h2>
            </div>

            <div className="home-main">
                <h1>Dart Wizard Supplies</h1>
                <h4>The best online dart shop!</h4>
                <div className="home-container">
                    <div>
                        <p>We have been established since 2019. It all started in our basement with an idea. Our area had a robust dart community but no place to purchase supplies. Now enter Dart Wizard Supplies! A home-grown, grass roots supply shop that can fill your ever dart-related needs!!</p>
                    </div>
                </div>
                <Link className="btn btn-outline-success btn-lg" to="/catalog">
                    Go to the Catalog!</Link>
                <Link className="btn btn-outline-success btn-lg" to="/about">
                    About Me!</Link>
            </div>
            
        </div>
    );
}

export default Home;