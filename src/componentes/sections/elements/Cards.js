import style from './Cards.module.css'
import ButtonB from '../../sections/elements/ButtonB'

function Cards({img, title, tech, description, rep, site} ){
    return(
        <div className={style.card}>
            <a href={site}>
                <img src={img} alt='Error'/>
            </a>
            
            <section>
                <h3> {title}</h3>
                <p><strong>Tecnologia</strong>{tech}</p>
                <p> {description}</p>
                <ButtonB text='Acesse o repositorio' link={rep}/>
            </section>
        </div>
    )
}

export default Cards