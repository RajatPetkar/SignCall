import React from 'react'
import { NavLink } from 'react-router-dom'
import Info from '../../Info'
import Info2 from '../../Info2'
import Other from '../Other/Other'
import Other2 from '../Other/Other2'
import Footer from '../Footer/Footer'
import { UserAuth } from '../Context/AuthContext';
import { auth } from '../../firebase.js';

import '../../App.css'

const Home = () => {
    const {googleSignIn, user ,setUser} = UserAuth();
    return (
        <>
            {/* <h3 className='text-center'>Welcome {user.displayName}</h3> */}
            <section className="text-gray-600 body-font mt-3">
                <div className="container mx-auto d-flex px-md-5 px-5 py-md-5 py-3 flex-md-row flex-col align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mr-4 flex-grow d-flex flex-column align-items-start text-center mb-4">
                                    <h1 className="mb-4 font-small text-gray-900">
                                    {user?.displayName  || auth.currentUser?.uid ? (
                                <div className='small'>Welcome, <span className='special'>{user.displayName||auth.currentUser?.phoneNumber}</span>  🙂</div>
                            ) : (
                                <div className='small' to='/login'>Welcome, <span className='special'>User</span> 🙂</div>
                            )}
                                        Premium video meetings for everyone.
                                    </h1>
                                    <p className="mb-4 lead text-small text-gray-600">
                                        We re-engineered the service we built for secure, high-quality business meetings, Sign Meet, to make it available for all, on any device.
                                    </p>
                                    <div className="d-flex md:flex-row justify-content-center align-items-center flex-col start_meeting">
                                        {/* <button type="button text-center"
                                            className=" btn btn-primary rounded text-lg flex justify-center">

                                            <NavLink exact="true" className='nav-link' to='/'> <i className="fa-solid fa-video pr-2 py-1.5 my-1 mx-1"></i> Start a meeting</NavLink>
                                        </button> */}
                                        <button type="button text-center" className="btn btn-primary rounded text-lg flex justify-center">
                                            <NavLink exact="true" to="/" className='nav-link'>
                                                <i className="fa-solid fa-video pr-2 py-1.5 my-1 mx-1"></i> Start a meeting
                                            </NavLink>
                                        </button>


                                        <input type="text" id="join_meeting_input" className="my-2 ms-2 ps-5 d-inline-flex font-normal placeholder:text-gray-500 bg-white border border-gray-300 py-2 px-2 outline-gray-500 rounded text-lg relative" placeholder="Enter a meeting code" />
                                        <NavLink exact="true" className='text-primary cursor-pointer' to='/join'>Join</NavLink>
                                    </div>
                                    <div className="mt-md-3 mt-2 font-bold text-muted text-decoration-none">
                                        Don't have an account?
                                        <NavLink exact="true" className='text-primary cursor-pointer px-1' to='/login'>Get Started Now</NavLink>
                                        {/* <span className="text-primary cursor-pointer">Get Started Now</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ml-4 first-image-parent w-70">
                                    <img src="./images/image1.webp" alt="first image" id="first-image" className="ml-4 img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <hr className="border border-1 mx-24" />
                <p className="text-center font-bold">See what you can do with Sign Meet</p>
                <i className="fa-solid fa-angle-down text-center d-grid place-item-center"></i>
            </div>

            <Other
                title={Info[0].title}
                desc={Info[0].desc}
                img={Info[0].img}
            />
            <Other2
                title={Info2[0].title}
                desc={Info2[0].desc}
                img={Info2[0].img}
            />
            <Other
                title={Info[1].title}
                desc={Info[1].desc}
                img={Info[1].img}
            />
            <Other2
                title={Info2[1].title}
                desc={Info2[1].desc}
                img={Info2[1].img}
            />
            <Other
                title={Info[2].title}
                desc={Info[2].desc}
                img={Info[2].img}
            />

            <Footer />

        </>
    )
}

export default Home