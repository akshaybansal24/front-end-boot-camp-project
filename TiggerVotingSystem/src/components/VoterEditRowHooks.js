//import { useForm } from "../hooks/useForm";

import { Component } from 'react';

export class VoterEditRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            make: props.voter.make,
            model: props.voter.model,
            year: props.voter.year,
            color: props.voter.color,
            price: props.voter.price
        };

        this.change = this.change.bind(this);
        this.savevoter = this.savevoter.bind(this);
    };
    
    change(e){
        this.setState(
            {
                [e.target.name] : e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value
            }
        )
    }

    saveVoter(){
        this.props.save({
            ...this.state,
            id: this.props.voter.id,
        });
    }

    render(){
        return(
            <tr key={this.props.voter.id}>
                <td>{this.props.voter.id}</td>
                <td><input type="text" name="make" value={this.state.make} onChange={this.change} ></input></td>
                <td><input type="text" name="model" value={this.state.model} onChange={this.change} ></input></td>
                <td><input type="number" name="year" value={this.state.year} onChange={this.change} ></input></td>
                <td><input type="text" name="color" value={this.state.color} onChange={this.change} ></input></td>
                <td><input type="number" name="price" value={this.state.price} onChange={this.change} ></input></td>
                <td>
                    <button className="btn" type="button" onClick={this.saveVoter()}>Save</button>
                    <button className="btn" type="button" onClick={() => this.props.cancel(-1)}>Cancel</button>
                </td>
            </tr>
        );
    }
};
