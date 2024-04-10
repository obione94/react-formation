import { Outlet, useNavigate } from "react-router";
import {Link} from 'react-router-dom';


function Home () {
    const nav = useNavigate();
    
    function redirectTo(route)
    {
        return nav(route);
    }

    return( 
        <div>
            <div>
                <nav>
                    <ul>
                    <li><Link to="/home/contact">Contact</Link></li>
                    <li><Link to="/home/acceuil">Acceuil</Link></li>
                    <li><Link to="/post">post</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <button onClick={()=>(redirectTo('/login'))} >connexion</button>
            </div>
            <div>
            <Outlet ></Outlet>
            </div>
        </div>
    );

    
    
}


export default Home;