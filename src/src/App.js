import React from 'react';
import logo from './logo.svg';
import './App.css';

import MineSiteOverview from './MineSiteOverview.js';
import MineSiteInput from './MineSiteInput.js';



    const mineList = [
        {
            id: 1,
            name: "Gold",
            quantity: 1,
        },
        {
            id: 2,
            name: "Diamond",
            quantity: 10,
        }
    ] 


class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            mineList
        }
    }
    
    updateMineList = (newList) => {
        console.log ("Update mine list");
        console.log (mineList);
        console.log ("New list:");
        console.log (newList);
        for (let i = 0; i < mineList.length; i ++) {
            mineList[i].quantity = newList[i]
        }
        this.setState (state => {
            let newMineList = state.mineList.map ((ore, index) => {
                ore.quantity = newList[index]

                return ore
            })
            return {
                mineList : newMineList
            }
        })
        console.log(mineList);
    }


    render () {
        return (
            <div className="App">
              <MineSiteInput id="mine-site-input" mineList={this.state.mineList} updateMineList={this.updateMineList}/>
                <MineSiteOverview id="mine-site-overview" mineList={this.state.mineList} />
            </div>
        );
    }
}

export default App;
