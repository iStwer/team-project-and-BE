import { Link } from "react-router-dom";

export const Header = () => {
    return <div>
        <Link to= '/'><h1 id="logo">PhysioReact</h1></Link>
       <ul>
            <li><Link to ='/services'>Naše služby</Link></li>
            <li><Link to = '/aboutus'>O nás</Link></li>
            <li><Link to = '/prices'>Ceník</Link></li>
            <li><Link to = '/contact'>Kontakt</Link></li>
        </ul>
        <button><Link to='/bookingform'>Objednat se</Link></button>
    </div>
}