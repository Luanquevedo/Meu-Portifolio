import styles from './ButtonB.module.css'

function ButtonB({text}){
    return(
        <div >
            <a href='https://github.com/Luanquevedo?tab=repositories'>
                <button className={styles.btn}>{text}</button>
            </a>
            
        </div>
    )
}

export default ButtonB