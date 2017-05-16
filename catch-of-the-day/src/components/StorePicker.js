import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault();
        console.log('Change URL event', event);

        console.info(this.storeInput.value);


    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}> 
              {/* This is how you do comment */}
              <h2>Please Enter A Store</h2>
              <input type="text" name="storeName" required ref={(input) => { this.storeInput = input}} placeholder="Store Name" defaultValue={getFunName()} />
              <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;