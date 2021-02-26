import React from 'react';
import styles from './Button.module.css';

export default class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {disabled: false}
        this.desabilitar = this.desabilitar.bind(this)
    }

    desabilitar(){
        console.log('cliquei')
        this.setState({disabled: true})
        setTimeout(()=>{this.setState({disabled: false})},3000)
    }

    render(){
        return (
            <button className={styles.button} style={{width: this.props.largura}} disabled={this.state.disabled} onClick={this.desabilitar}>{this.props.children}</button>
        )
    }
}

