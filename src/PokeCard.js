import React ,  {Component} from 'react';
import './pokecard.css';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number )
class PokeCard extends Component {
    render(){
        const pokeLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(this.props.id)}.png`
        return (
            <div className= "PokeCard">
                <h1>{this.props.name}</h1>
                <img src={pokeLink} alt={this.props.name}/>
                <div>
                    <p>Type : {this.props.type}</p>
                    <p>EXP : {this.props.exp}</p>
                </div>
            </div>
        )
    }
}

export default PokeCard;