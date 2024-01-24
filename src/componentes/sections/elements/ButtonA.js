import styles from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
        <div >
            <a href='https://www.linkedin.com/in/luan-q-5b5641110/'>
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA