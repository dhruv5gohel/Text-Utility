import PropTypes from 'prop-types'
import p1 from './palette1.png'
import p2 from './palette2.png'
import p3 from './palette3.png'
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: props.bgCol}}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/" style={{color: props.mode==="p2"?"white":"black"}}>{props.title}</Link> */}
        <a className="navbar-brand" href="#" style={{color: props.mode==="p2"?"white":"black"}}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode==="p2"?"white":"black"}}>Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#" style={{color: props.mode==="p2"?"white":"black"}}>Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color: props.mode==="p2"?"white":"black"}}>About</Link>
            </li> */}
          </ul>
          {/* <button className={`btn btn-${props.mode==="light"?"dark":"primary"}`} onClick={props.toggleMode}>Enable {props.mode==="light"?"Dark":"Light"} Mode</button> */}
          <button className={`btn btn-${props.mode==="p1"?"dark":"primary"} mx-2`} onClick={() => props.toggleMode("p1")} style={{width: "4%"}}><img src={p1} alt="palette 1" style={{width: "100%"}}/></button>

          <button className={`btn btn-${props.mode==="p2"?"dark":"primary"} mx-2`} onClick={() => props.toggleMode("p2")} style={{width: "4%"}}><img src={p2} alt="palette 2" style={{width: "100%"}}/></button>
          
          <button className={`btn btn-${props.mode==="p3"?"dark":"primary"} mx-2`} onClick={() => props.toggleMode("p3")} style={{width: "4%"}}><img src={p3} alt="palette 3" style={{width: "100%"}}/></button>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Title here"
}

