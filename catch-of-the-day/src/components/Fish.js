import React from 'react';
import { formatPrice } from '../helpers';
// import AddFishForm from './AddFishForm';

class Fish extends React.Component{
    // constructor() {
    //     super();
    //     this.loadSamples = this.loadSamples.bind(this);

    // }
    render() {
      const { details } = this.props;
        return (
            <li className="menu-fish">
              <img src={details.image} alt={details.desc} />
              <h3 className="fish-name">
               {details.name}
               <span className="price">{formatPrice(details.price)}</span>
              </h3>
              <p>{details.desc}</p>
              <button>Add To Order</button>
            </li>
        );
    }
}

export default  Fish;