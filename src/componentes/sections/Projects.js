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
            title='Projeto bootcamp' 
            tech=' HTML, CSS' 
            description='Uma landing page responsiva na qual possui o opjetivo de captação de dados para novos alunos.' 
            rep='https://github.com/Luanquevedo/landingpage-2.git'
            site='https://stirring-seahorse-0de8d8.netlify.app'/>
            <Cards
            img={ccxp} 
            title='Projeto CCXP' 
            tech=' HTML, CSS, JavaScript'
            description='Uma landing page na qual utiliza java script para exibir contador de tempo ate o inicio do evento proposto' 
            rep='https://github.com/Luanquevedo/ccxp-landingpage.git'
            site='https://projetoccxp2024.netlify.app'/>
            <Cards
            img={portifolio} 
            title='Protifolio Pessoal' 
            tech=' HTML, CSS, JavaScript, React, Bootstrap, React Icons'
            description=' Um portifolio criado utilizando tecnologias mais refinadas com objetivo de apresentar o perfil e os projetos mais recentes realizados.' 
            rep=''
            site=''/>
            <ButtonB text='Acesse o meu repositorio' href='https://github.com/Luanquevedo?tab=repositories'/>            
        </div>
    )
}

export default Projects