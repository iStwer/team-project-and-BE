import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer>
            <ul>
            <Link to ='/'><p>PhysioReact</p></Link>
            
            <li><Link to ='/services'>Naše služby</Link></li>
            <li><Link to = '/aboutus'>O nás</Link></li>
            <li><Link to = '/prices'>Ceník</Link></li>
            <li>Zpracování osobních údajů</li>
            <li>Q&A</li>
            <li><Link to = '/contact'>Kontakt</Link></li>

            </ul>
        </footer>
    );
}