import { render } from '@testing-library/react';
import React from 'react';


// Simple function creation
// let App = (props) => {
//     let h1 = <h1>Hello World!</h1>;
//     return h1;
// }


// Adding more to it for practice
// let App = (props) => {
// return <h1>Hello {props.name}, how is the weather in {props.city} today?</h1>;
// }

// Converting to class based
// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {}
//     }
//     render() {
//         return <h1>Hello Niki, how is the weather in Birmingham today?</h1>; 
//       }
//   }
//   export default App;

  //

// Adding state
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: `Good Morning, `
        }

        this.onChange = this.onChange.bind(this);
    }


    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    onInputChange = (value) => {
        this.setState ({ name: value });
    }


    render() {
        return (
            <div>
                    <h1>{this.state.text} {this.state.name}</h1>
                    <section className="section">
                    <input 
                    className="input" 
                    value={this.state.name} 
                    placeholder="Enter your name..." 
                    onChange = { (event) => this.onInputChange(event.target.value)}
                    />
                    <hr/>
                    <button>Submit</button>
                    </section>
            </div>
        )
    }
}

export default App;