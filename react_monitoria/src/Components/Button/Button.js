import React from 'react';
import styles from './Button.module.css';

export default class Button extends React.Component{

    render(){
        return (
            <button className={styles.button} style={{width: this.props.largura}} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

