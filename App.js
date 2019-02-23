import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";


const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

console.log(petfinder);

class App extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          pets: []
        };
      }
    componentDidMount() {
        petfinder.breed.list({ animal: "dog" }).then(console.log, console.error);
    }
    render() {
        return (
            <div>
                <h1>Adopt Me!</h1>
                <Pet name="Luna" animal="dog" breed="Havanese" />
                <Pet name="Pepper" animal="bird" breed="Cockatiel" />
                <Pet name="Doink" animal="cat" breed="Mix" />
            </div>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

