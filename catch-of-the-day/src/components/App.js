import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            fishes: {},
            order: {}
        };
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
    }

    addFish(fish) {
        // copy state
        const fishes = {...this.state.fishes};
        // add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;

        this.setState({ fishes: fishes }); // es6
        console.log(fishes);
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
           <div className="catch-of-the-day">
             <div className="menu">
                <Header tagline={'Yes!!!'}/>
                <ul>
                {Object.keys(this.state.fishes).map((key, i) => <Fish key={`${key}-${i}`} details={this.state.fishes[key]} /> )}
                </ul>
             </div>
             <Order />
             <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
           </div>
        )
    }
}

export default App;