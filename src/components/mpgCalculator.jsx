import React, { Component } from 'react';
import styled from 'styled-components'


const AppContainer = styled.div`
    text-align:center;
    font-size:40px;
`

class MpgCalculator extends Component {

    state={
        totalCost : 0
    }


    componentDidUpdate(prevProps){
        let props = this.props
        if(props.weeklyMiles !== prevProps.weeklyMiles || props.mpg !== prevProps.mpg || props.fuelCost !== prevProps.fuelCost){

            this.costPerDistance()

        }
    }

    costPerDistance(){
        const weeklyMiles = this.props.weeklyMiles
        const mpg = this.props.mpg 
        const fuelCost = this.props.fuelCost

        if(weeklyMiles !== 0 && mpg !== 0 && fuelCost !== 0){
            let miles = weeklyMiles / mpg
            let gallon = fuelCost * this.props.conversionFactor
            
            this.setState({
                totalCost: miles * gallon
            })
        }
    }

    render() {

        return (
            <AppContainer>
               It's cost you £{this.state.totalCost.toFixed(2)}
            </AppContainer>
        );
    }
}

export default MpgCalculator;
