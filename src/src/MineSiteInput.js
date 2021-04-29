import React from 'react';
import './MineSiteInput.css'

class MineSiteInput extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            mineList : props.mineList.map (ore => ore.quantity)                     
        }

        console.log (this.state.mineList);
    }

    submit = (event) => {
        this.props.updateMineList (this.state.mineList);
    }

    updateQuantity = (oreIndex, quantity) => {
        console.log("Update " + oreIndex + " new quantity " + quantity);
        this.setState(state => {
            const list = state.mineList.map((oreQuantity, index) => {
                if (index === oreIndex) {
                    return quantity
                } else {
                    return oreQuantity;
                }
            })

            return {
                mineList: list,
            }
        })

        console.log (this.state.mineList)
    }

   render () {
       return (
            <div id="mine-site-input">
                <h1>Mine Site Input</h1>
                <form id="mine-site-form">
                    <MineInputList mineList={this.props.mineList} updateQuantity={this.updateQuantity} />
                    <input id="mine-input-submit" type="button" value="Submit" onClick={this.submit}/>

                </form>
            </div>
        );
   }
}

function MineInputList (props) {
    return (
            <div className="mine-input-list">
               {
                props.mineList.map ((ore, index) => {
                    return <OreInput ore={ore} key={index} index={index} updateQuantity={props.updateQuantity} />
               })
            }
           </div>


    )
}

class OreInput extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            quantity: props.ore.quantity
        }
    }


    changeQuantity = (event) => {
        let newQuantity = parseInt(event.target.value)
        this.setState ({
            quantity: newQuantity
        })
        this.props.updateQuantity (this.props.index, newQuantity);
    }

    render () {
        return (
            <div className="ore-input">
                <label className="ore-label" htmlFor={'ore'+this.props.ore.id}>{this.props.ore.name}</label>
                <input className="ore-text-input" type="text" id={'ore'+this.props.ore.id} name={'ore'+this.props.ore.id} value={this.state.quantity} onChange={this.changeQuantity}/>
            </div>
        )
     
    }
}


export default MineSiteInput
