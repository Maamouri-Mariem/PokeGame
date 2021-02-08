import React, {Component} from "react";
import PokeCard from './PokeCard'
import "./pokedex.css"

class Pokedex extends Component {
    render (){
        
        return (
            <div className="Pokidex">
            
            <h2 className={this.props.isWinner ? "winner" : "loser"}>{this.props.isWinner ? "You Win" : "You Lose"}</h2>
            <p>Total Experience : {this.props.exp}</p>
            <div className="pokedex-card">
            {this.props.pokemon.map((p) => (
                <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
            </div>
        )
    }
}

export default Pokedex;