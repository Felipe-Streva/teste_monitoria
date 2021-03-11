import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

export default function Button(props){

    const [disabled, setDisabled] = useState(false)

    const desabilitar = () => {
        console.log('cliquei')
        setDisabled(true)
        setTimeout(()=>{setDisabled(false)},3000)
    }

    useEffect(() => {
        console.log(`A propriedade disabled é ${disabled}`)
    }, [disabled])


    return (
        <button className={styles.button} style={{width: props.largura}} disabled={disabled} onClick={props.onClick}>{props.children}</button>
    )

}

