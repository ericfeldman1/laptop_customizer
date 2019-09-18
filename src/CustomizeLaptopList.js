import React from 'react';
import CustomizeLaptopItem from './CustomizeLaptopItem'

import slugify from 'slugify';

class CustomizeLaptopList extends React.Component {
  render() {
    return (

      Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map((item,index) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={index} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });

        return (
          <form className="main__form" key={featureHash}>
            <CustomizeLaptopItem
              feature={feature}
              featureHash={featureHash}
              options={options}
            />
          </form>
        );
      })

    )
  }
}

export default CustomizeLaptopList