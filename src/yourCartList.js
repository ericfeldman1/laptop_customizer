import React, { Component } from 'react';
import yourCartItem from './yourCartItem';
import slugify from 'slugify';

class yourCartList extends Component {

    render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.state.selected[feature];
  
        return (
            <yourCartItem
            featureHash={featureHash}
            feature={feature}
            // should this be selectedOption.name + .cost?
            selectedOption={selectedOption}
            USCurrencyFormat={USCurrencyFormat}

            />
        );
      });

}
}
export default yourCartList