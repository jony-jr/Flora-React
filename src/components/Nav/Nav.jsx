import { NavLink } from 'react-router-dom'
import floralogo from '../../assets/Images/flora_logo.webp'
import './Nav.css'
import { useState,useEffect } from 'react';
export default function Nav() {
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50; // Adjust threshold as needed
            setIsActive(!scrolled); // Remove py-3 when scrolled, add when at top
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);
    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top py-1 ${isActive && 'py-3 my-bg-op100' }`}>
                <div className="container" >
                    <NavLink className="navbar-brand user-select-none" to=""><img src={floralogo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio">Porfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
