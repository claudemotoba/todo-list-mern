import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div className="col-sm-3 mt-5">
            <nav className="col-sm-12 navbar navbar-expand-lg navbar-light bg-light px-3">
                    <div className="col-sm-12 collapse navbar-collapse" id="navbarNavDropdown">
                        
                        <ul className="col-sm-12 navbar-nav flex-column">
                            <h5>Filtre par :</h5>
                            <li className="nav-item">
                                <NavLink to="/" activeclassname="active" className="nav-link">
                                    <span className="me-3 badge bg-info"> 10</span>
                                    Tout 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/status/open" activeclassname="active" className="nav-link">
                                    <span className="me-3 badge bg-secondary"> 10</span>
                                    OPEN
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/status/in-progress" activeclassname="active" className="nav-link">
                                    <span className="me-3 badge bg-primary"> 10</span>
                                    IN PROGRESS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/status/pending" activeclassname="active" className="nav-link">
                                    <span className="me-3 badge bg-warning"> 10</span>
                                    PENDING
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/status/completed" activeclassname="active" className="nav-link">
                                    <span className="me-3 badge bg-success"> 10</span>
                                    COMPLETED
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/status/close" activeclassname="active" className="nav-link">
                                    <span className="me-3 badge bg-dark"> 10</span>
                                    CLOSE
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Header;