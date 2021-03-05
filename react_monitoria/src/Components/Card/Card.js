import React, {Component} from 'react';
import styles from './Card.module.css';

export default class Card extends Component{

    render(){
        return (
            <div className={styles.div}>
                <img src={this.props.img} className={styles.img} alt="pessoa random"/>
                <h5 className={styles.nome}>{this.props.nome}</h5>
            </div>
        )
    }
}