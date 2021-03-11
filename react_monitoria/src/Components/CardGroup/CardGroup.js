import React, { useState, useEffect} from 'react';
import styles from './CardGroup.module.css';
import Card from '../Card/Card'
import Button from '../Button/Button'

export default function CardGroup (props){


    const [dados, setDados] = useState({results: []})

    const montarCards = () => {
        fetch('https://randomuser.me/api?results=10').then(data=>data.json())
            .then(results => {
                setDados(results)
            })
    }

    useEffect(() => {
        montarCards()
    }, [])

    const attPessoas = () => {
        montarCards()
    }
        

    return (
        <div className={styles.div}>
            {dados.results.map((user, index) => 
                <Card nome={user.name.first} img={user.picture.thumbnail} key={index} />
            
            )}
            <Button largura='400px' onClick={attPessoas} >Enviar</Button>
        </div>
    )

}