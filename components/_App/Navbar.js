import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <header className="header-area fixed-top">
                {/* TopHeader */}
                <TopHeader />

                <div className="nav-area">
                    <div id="navbar" className="navbar-area">
                        <div className="main-nav">
                            <div className="container-fluid">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link href="/">
                                        <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                            <img src="/img/ashaltech-logo.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation" 
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">
                                                        Home
                                                    </a>
                                                </Link> 
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">About</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">
                                                        Services
                                                    </a>
                                                </Link> 
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/solutions" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Solutions</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/trainings" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Trainings</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/ashal-tech-ceo" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Message From CEO</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Contact</a>
                                                </Link>
                                            </li> 
                                        </ul>
                                    
                                        <div className="others-option">
                                            <div className="get-quote">
                                                <Link href="/get-quote">
                                                    <a className="default-btn">
                                                        Get A Free Quote
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Navbar;
