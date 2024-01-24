import { FaGithub, FaInstagram,FaLinkedin } from "react-icons/fa";
import styles from './footer.module.css'
import Nav from 'react-bootstrap/Nav';

function footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><Nav.Link href="https://github.com/Luanquevedo?tab=repositories"><FaGithub size={30} /></Nav.Link></li>
                <li><Nav.Link href="https://www.linkedin.com/in/luan-q-5b5641110/"><FaLinkedin size={30}/></Nav.Link></li>
                <li><Nav.Link href="https://www.instagram.com/luanquevedo99/?next=%2F"><FaInstagram size={30}/></Nav.Link></li>
            </ul>
            <p>luan.quevedo@hotmail.com</p>
            <p>Luan Quevedo © 2024</p>
        </div>
    )
}

export default footer