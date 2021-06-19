import React from 'react';
function Nav() {
    return (
        <div className="colu">

            <div >
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" height="30px" alt="" srcset="" />
                        </a>
                        <form className="d-flex">
                            <input className="form-control me-2, hed" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active m-2" aria-current="page" href="#">English</a>
                                </li>
                                <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="country-ae" />
                                <li className="nav-item dropdown p-1">
                                    <a className="nav-link dropdown-toggle m-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        UAE
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">UAE</a></li>
                                        <li><a className="dropdown-item" href="#">KSA</a></li>
                                        <li><a className="dropdown-item" href="#">EGYPT</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item m-2">
                                    <a className="nav-link" href="#">Sign in</a>
                                </li>
                                <li className="nav-item m-2">
                                    <a className="nav-link " href="#" tabIndex={-1} aria-disabled="true">cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Nav;