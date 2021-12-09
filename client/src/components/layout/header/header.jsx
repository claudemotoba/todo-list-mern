import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div className="col-sm-3 mt-5">
            <nav className="col-sm-12 navbar navbar-expand-lg navbar-light bg-light px-3">
                    <div className="col-sm-12 collapse navbar-collapse" id="navbarNavDropdown">
                        
                        <ul className="col-sm-12 navbar-nav flex-column">
                            <p>Filtre par :</p>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/" className="nav-link">
                                    <span className="me-3 badge bg-info"> 10</span>
                                    Tout 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/status/open" className="nav-link">
                                    <span className="me-3 badge bg-secondary"> 10</span>
                                    OPEN
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/status/in-progress" className="nav-link">
                                    <span className="me-3 badge bg-primary"> 10</span>
                                    IN PROGRESS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/status/pending" className="nav-link">
                                    <span className="me-3 badge bg-warning"> 10</span>
                                    PENDING
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/status/completed" className="nav-link">
                                    <span className="me-3 badge bg-success"> 10</span>
                                    COMPLETED
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/status/close" className="nav-link">
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