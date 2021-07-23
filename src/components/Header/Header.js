import { Projects } from '../Projects/Projects';
import { AboutMe } from '../AboutMe/AboutMe';
import { Resume } from '../Resume/Resume';
import { Contact } from '../Contact/Contact';
import './Header.css'

export function Header(props) {


  return (

    <header>
      <h1>Nicholas Held</h1>
      <nav>
        <ul>
          <li><button href='#' onClick={() => props.setPage(<AboutMe />)}>About Me</button></li>
          <li><button href='#' onClick={() => props.setPage(<Projects />)}>Projects</button></li>
          <li><button href='#' onClick={() => props.setPage(<Contact setPage={props.setPage} />)}>Contact</button></li>
          <li><button href='#' onClick={() => props.setPage(<Resume />)}>Resume</button></li>
        </ul>
      </nav>
    </header>
  )
}
