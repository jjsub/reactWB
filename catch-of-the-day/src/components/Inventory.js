import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
    // constructor() {
    //     super();
    //     this.loadSamples = this.loadSamples.bind(this);

    // }
    render() {
        return (
            <div>
              <p>Inventory</p>
              <AddFishForm addFish={this.props.addFish} />
              <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        );
    }
}

export default Inventory;