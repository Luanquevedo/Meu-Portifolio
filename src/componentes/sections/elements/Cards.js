import style from './Cards.module.css'
import ButtonB from '../../sections/elements/ButtonB'
import React, { useState } from 'react';

function Cards({img, title, tech, description, rep, site} ){

    const [info, setInfo] = useState(false);

    function handleMouseEnter() {
        setInfo(true);
    }

    function handleMouseLeave() {
        setInfo(false);
    }

    return (
        <div className={style.card}>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={site}>
                <img src={img} alt='Error' />
            </a>

            {info && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia:</strong> {tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o repositorio' link={rep} />
                </section>
            )}
        </div>
    )
}

export default Cards
