import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="px-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <h3>Todo List</h3>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link active">
                                    New
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;