import Logo from '../Assets/kiss.png'
import { NavLink } from 'react-router-dom'
export default function NavBar(){
  
    return(
        <nav>
            <div className="logo">
                <img src={Logo}/>
            </div>

            <ul className='nav-links' >
                <li>
                    <NavLink>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Nails'}>
                        Nails
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Lashes'}>
                        Lashes
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}