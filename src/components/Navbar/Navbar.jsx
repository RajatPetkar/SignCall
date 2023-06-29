import { NavLink } from 'react-router-dom'
import '../../App.css'
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { auth } from '../../firebase.js';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    console.log(auth.currentUser?.uid);
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <header className="body-font">
                <div className="container mx-auto d-flex flex-wrap p-4 flex-row justify-content-between align-items-center">
                    <a href="#" className="flex w-40">
                        <img width="60px" src="./images/logo.png" alt="logo" className="logo react cursor-pointer" />
                    </a>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav list-unstyled">
                                <li className="nav-item">
                                    <NavLink exact="true" className='nav-link' to='/'>Solutions</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact="true" className='nav-link' to='/'>Plans &amp; Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact="true" className='nav-link' to='/'>Contact Sales</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink exact="true" className='nav-link' to='/'>Resources</NavLink>
                                </li> */}
                            </ul>
                            <div className="nav-item">
                                <button type="button" id="header_join_btn" className="btn btn-outline-primary mx-2">Join a meeting</button>
                                <button type="button" className="btn btn-primary">Start a meeting</button>
                                
                            </div>
                            {auth.currentUser?.uid || user?.displayName ? (
                                <Link className='mx-3' onClick={handleSignOut}>Logout</Link>
                            ) : (
                                <Link className='mx-3' to='/login'>Sign in</Link>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar