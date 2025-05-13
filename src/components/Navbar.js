const Navbar = () => {
    return(
        <div className="mordern-navbar">
            <div className="Nav-logo">
                <h1>Logo</h1>
            </div>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {['Work', 'About', 'Playground', 'Resource'].map((text, i) => (
                    <li key={i}>
                        <a href="#">
                        <span className="roller">{text}</span>
                        </a>
                    </li>
                    ))}
            </ul>
        </div>
    )
}
export default Navbar;