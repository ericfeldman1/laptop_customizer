import React from 'react';
import YourCartItem from './YourCartItem'

class YourCartList extends React.Component {
  render() {
    return(

      Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
  
        return (
          <YourCartItem 
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          USCurrencyFormat={this.props.USCurrencyFormat}
          selectedOption={selectedOption}
          />
        );
      })
    )
  }
}

export default YourCartList