/**
 * Created by Jenson on 23.12.16.
 */
import React from 'react';

import TodoView from '../components/TodoView';

class App extends React.Component {
    constructor()
    {
        super();


    }

    render()
    {

        return (
            <div className="App">
                <TodoView items={ITEMS}/>
            </div>
        );
    }
}


export default App;

let ITEMS = [
    {"name": 'John'},
    {"name": 'John'},
    {"name": 'John'},
    {"name": 'John'},
    {"name": 'John'},
    {"name": 'Egon'}
];