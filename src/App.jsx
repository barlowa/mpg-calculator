import React, { Component } from 'react';
import styled from 'styled-components'

import UserInput from './components/userInput'
import MpgCalculator from './components/mpgCalculator'

const AppContainer = styled.div`
  width:50%;
  display:block;
  margin:0 auto;
  font-size: 1.5em;
  color: palevioletred;
`

const Heading = styled.div`
text-align:center;
  font-size: 1.5em;
  color: palevioletred;
`



class App extends Component {
  state = {
    weeklyMiles: 0,
    mpg:0,
    fuelCost:0,
    }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <div>
        <Heading>
        Calculate how much it's costing you to run your car every week!
        </Heading>

        <AppContainer>

          <MpgCalculator 
            weeklyMiles = {this.state.weeklyMiles}
            mpg = {this.state.mpg}
            fuelCost = {this.state.fuelCost}
            conversionFactor = {4.54} //uk gallon in liters
          />

          <UserInput 
            handleChange = { this.handleChange}
          />

        </AppContainer>
      </div>

    );
  }
}

export default App;
