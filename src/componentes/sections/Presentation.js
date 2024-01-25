import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'
import {useEffect, useState} from 'react'
import React from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['Luan Quevedo!','Desenvolvedor Web','Apaixonado por tecnologia'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    useEffect(()=>{
        let clock = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(clock)}
    }, [text])



    return(
        <div className={styles.Presentation} id='Presentation'>
            <h2><strong>Bem-vindo ao meu Portfólio</strong></h2>
            <h1>Ola, eu sou {text}</h1>
            <p>Sou apaixonado por criar experiências web inovadoras e de alta qualidade. Com habilidades em HTML5, CSS,<br/>
               JavaScript, Bootstrap, React e Figma, já atuei como programador de internet e atualmente sou o suporte técnico,<br/>
               onde monitoro sistemas e ajudo alunos e funcionários. Estou sempre em busca de aprimoramento na fascinante jornada da programação.
            </p>
            <ButtonA text='Conecte-se comigo!' />
            

        </div>
    )
}

export default Presentation
