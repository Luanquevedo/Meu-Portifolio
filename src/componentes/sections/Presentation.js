import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'


function Presentation(){
    return(
        <div className={styles.Presentation} id='Presentation'>
            <h2><strong>Bem-vindo ao meu Portfólio</strong></h2>
            <h1>Ola, eu sou o Luan Quevedo</h1>
            <p>Sou apaixonado por criar experiências web inovadoras e de alta qualidade. Com habilidades em HTML5, CSS,<br/>
               JavaScript, Bootstrap, React e Figma, já atuei como programador de internet e atualmente sou o suporte técnico,<br/>
               onde monitoro sistemas e ajudo alunos e funcionários. Estou sempre em busca de aprimoramento na fascinante jornada da programação.
            </p>
            <ButtonA text='Conecte-se comigo!' />
            

        </div>
    )
}

export default Presentation