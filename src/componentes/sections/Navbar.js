import { FaGithub, FaInstagram,FaLinkedin } from "react-icons/fa";
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <div className={styles.Navbar}>
            <ul>
                <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#skills">Habilidades</Nav.Link></li>
                <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>

            </ul>
            <ul>
                <li><Nav.Link href="https://github.com/Luanquevedo?tab=repositories"><FaGithub size={30} /></Nav.Link></li>
                <li><Nav.Link href="https://www.linkedin.com/in/luan-q-5b5641110/"><FaLinkedin size={30}/></Nav.Link></li>
                <li><Nav.Link href="https://www.instagram.com/luanquevedo99/?next=%2F"><FaInstagram size={30}/></Nav.Link></li>
            </ul>
        </div>
    )
}

export default Navbar