import './topnavfixed.css';
import { Link } from 'react-router-dom'

function TopNavFixed() {
    return (
        <div className="topnavfixed">
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a target="" href="https://lets-connect-page.vercel.app/">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}   

export default TopNavFixed;