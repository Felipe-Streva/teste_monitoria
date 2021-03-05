import React, {Component} from 'react';
import styles from './CardGroup.module.css';
import Card from '../Card/Card'

export default class CardGroup extends Component{

    constructor(props){
        super(props)
        this.state = {results: []}
    }

    componentDidMount(){
        fetch('https://randomuser.me/api?results=10').then(data=>data.json())
            .then(results => {
                this.setState(results)
            } )
    }


    render(){
        return (
            <div className={styles.div}>
                {this.state.results.map((user, index) => 
                    <Card nome={user.name.first} img={user.picture.thumbnail} key={index} />
                )}
            </div>
        )
    }
}