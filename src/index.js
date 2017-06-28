// Demo component
// this is only example component
// you can find tests in __test__ folder

// dependencies

import { Reactor, Store, toImmutable } from 'nuclear-js'; // import { member1 , member2 } from "module-name";
import React from 'react';

/* Create a Reactor

In NuclearJS the reactor acts as the dispatcher, 
    - dispatcher:
        the process of selecting which implementation of a method or function to call at run time. 
        It is commonly employed in, and considered a prime characteristic of, object-oriented programming (OOP) languages and systems.
maintains the application state,
    - state:
        data that defines the condition of some object or system.
and provides an API,
    - API:
        a particular set of rules ('code') and specifications that software programs can follow to communicate with each other. 
        It serves as an interface between different software programs and facilitates their interaction, 
        similar to the way the user interface facilitates interaction between humans and computers.
for data access and observation. */

Reactor.registerStores({ // Register stores
    /* 
    Stores determine the shape of your application state. Stores define two methods:
        - method:
            Function that is a value of a property within an Object. A function ran inside an object.
            Piece of code that is called by a name that is associated with an object. (method: registerCode, object: Reactor) 
            Usually identical to a function except for two key differences:
                + A method is implicitly passed the object (Reactor) on which it was called.
                + A method is able to operate on data that is contained within the class.
                    - class: 
                        in JS, class is a "special function" with syntactical sugar.
                        JS is based on the prototypical inheretence model, not the object-oriented inheretence model.
    */  
    typeFilter: Store({
        /* 
        typeFilter is a property of the method registerStores
            - property:
                An association between a name (or key) and a value.
        getInitialState() - object method that returns the initial state for that stores specific key in the application state. */
        getInitalState() {
            return null;
        },
        /* 
        initialize() - object method that sets up any action handlers. Specifies the action type and a function that transforms */
        initialize() {
            this.on('FILTER_TYPE', (state, type) => type)
        }
    }),

    items: Store({
        getInitalState() {
            return toImmutable([ /* 
                toImmutable is a method call of Reactor that sets its value to immutable.
                    - immutable:
                        Can't be changed after its created.
                    - mutable:
                        Can be changed after its created.
            */
                {},
                {}
            ])
        },
    })
});

/*
    
class MyComponent extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return (
            <div className="my-component">
                <i className="icon-test"></i>
                <i className="icon-test"></i>
                <i className="icon-test"></i>
                <button onClick={this.props.handleClick} type="button"></button>
            </div>
        )
    }
};

export default MyComponent;

*/