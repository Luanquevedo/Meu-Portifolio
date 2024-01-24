import style from './Skills.module.css'
import javascript from  '../../componentes/image/skills/javascript.svg'
import html from  '../../componentes/image/skills/html.svg'
import css from  '../../componentes/image/skills/css.svg'
import react from  '../../componentes/image/skills/react.svg'



function Skills(){
    return(
        <div className={style.Skills} id='skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div className={style.skillsimg}>
                <img src={javascript} alt="JavaScript" />
                <img src={html} alt="HTML" />
                <img src={css} alt="CSS" />
                <img src={react} alt="React" />
            </div>
        </div>
    )
}

export default Skills