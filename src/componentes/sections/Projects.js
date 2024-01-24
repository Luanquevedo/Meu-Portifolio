import style from './Projects.module.css'
import Cards from './elements/Cards'
import ButtonB from './elements/ButtonB'
import bootcamp from '../image/projects/bootcamp.png'
import ccxp from '../image/projects/ccxp.png'
import portifolio from '../image/projects/portifolio.png'

function Projects(){
    return(
        <div className={style.Projects} id='Projects'>
            <h1>Projetos</h1>
            <Cards
            img={bootcamp} 
            title='Projeto de Bootcamp' 
            tech=' HTML, CSS' 
            description='Uma landing page responsiva com o objetivo de captar dados de novos alunos.' 
            rep='https://github.com/Luanquevedo/landingpage-2.git'
            site='https://stirring-seahorse-0de8d8.netlify.app'/>
            <Cards
            img={ccxp} 
            title='Projeto CCXP' 
            tech=' HTML, CSS, JavaScript'
            description='Uma landing page que utiliza JavaScript para exibir um contador de tempo até o início do evento proposto.' 
            rep='https://github.com/Luanquevedo/ccxp-landingpage.git'
            site='https://projetoccxp2024.netlify.app'/>
            <Cards
            img={portifolio} 
            title='Portfólio Pessoal' 
            tech=' HTML, CSS, JavaScript, React, Bootstrap, React Icons'
            description=' Um portfólio criado utilizando tecnologias refinadas com o objetivo de apresentar meu perfil e os projetos mais recentes realizados.' 
            rep=''
            site=''/>
            <ButtonB text='Acesse o meu repositorio' href='https://github.com/Luanquevedo?tab=repositories'/>            
        </div>
    )
}

export default Projects
