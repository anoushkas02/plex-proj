import React from "react"
import IceCream from './IceCream'

class ClassComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            arrayOfIceCream: []
        }
    
    }
    componentDidMount() {
        fetch('http://localhost:3001/',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
                // .then(res => console.log(res))
             .then(res => res.json())
             .then(data => this.setState({arrayOfIceCream data}));
    }

    render(){
        let mappedIceCream = this.state.arrayOfIceCream.map(item => 
        <IceCream flavor={item.type} topping={item.topping} container={item.container} />)
        console.log(mappedIceCream)
        return (
            <div>
                <h1> Ice Cream Combinations </h1>
                {mappedIceCream}
            </div>
        )
    }
}

export default ClassComponent;