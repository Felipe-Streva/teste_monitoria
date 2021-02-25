import React from 'react';
import styles from './Header.module.css'

export default class Header extends React.Component{


    render(){

        const nome = 'Jorge Dicas'

        return (<div>
                    <h1 className={styles.titulo} >Monitoria</h1>
                    <p className={styles.paragrafo}>Melhor monitoria de React do Ano, até agora</p>
                    <p>{nome ? nome : null}</p>
                </div>
        )
    }
}
