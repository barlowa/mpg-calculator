import React from 'react'
// import shortid from 'shortid'
import styled from 'styled-components'


const Container = styled.div`

`
const Text = styled.div`
    text-align:left;
`
const Description = styled.div`
    font-size:15px;
    color:black;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    font-size: 35px;
    padding: 8px;
    border-radius: 5px;
    border-color: #bebebe;
    border-style: solid;
    color:#bebebe;
`



export default props =>  (

    <div>
        <Container>
            <Text>MPG</Text>
            <Description>
                How many miles per gallon did you average since your last full tank
            </Description>
            <Input
                name='mpg'
                onChange={props.handleChange}
                placeholder={'MPG'}
            />
        </Container>

        <Container>
            <Text>Fuel Cost</Text>
            <Description>
                How much did your last tank of fuel cost?
            </Description>
            <Input
                name='fuelCost'
                onChange={props.handleChange}
                placeholder={'Fuel Cost'}
            />
        </Container>

        <Container>
            <Text>Weekly Miles</Text>
            <Description>
                How many miles have you covered since your last fill up
            </Description>
            <Input
                name='weeklyMiles'
                onChange={props.handleChange}
                placeholder={'Miles'}
            />
        </Container>

    </div>
)






