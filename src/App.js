import React, { Component } from 'react';
import customOptionList from './customOptionList';
import yourCartList from './yourCartList';
import yourCartTotal from './yourCartTotal';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  // Keep state in App.js
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  // Keep updateFeature in App.js
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  // This section will move to the customOption component(s)
  render() {
  
    // Will move to yourCart component(s)
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    // Will remain in App, but be refactored to pull in customOptionList and yourCartList instead
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <customOptionList 
            features={features}
            USCurrencyFormat={USCurrencyFormat}
             />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <yourCartList 
            USCurrencyFormat={USCurrencyFormat}
            />
            {/* Not sure where this {summary} piece goes, but I think it gets moved somewhere... */}
            {summary}
            <yourCartTotal
            total={total} 
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
