/**
 * Created by Jenson on 23.12.16.
 */
import React from 'react';
import TodoItem from '../components/TodoItem';
import ItemCounter from '../components/ItemCounter';

import './TodoView.scss';


export default class TodoView extends React.Component {


    constructor(props)
    {
        super(props);


        this.state = {
            clickedItems: 0
        };


        console.log('some1233');

        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(counter)
    {
        console.log(counter)
        this.setState({clickedItems: this.state.clickedItems + counter});
    }

    render()
    {
        console.log('renderWhole');
        let onUpdate = this.onUpdate;
        let itemCounter = <ItemCounter itemsClicked="2000"/>;
        console.log(this.props)
        var itemRows = [];
        this.props.items.forEach(function (item, index)
        {
            console.log(index);
            itemRows.push(<TodoItem onUpdate={onUpdate} item={item} key={'item_' + index}/>);
        });

        var clicked = this.state.clickedItems;

        return (

            <div className="todoView">
                <h2>TodoView2</h2>
                {itemCounter}
                {itemRows}
            </div>
        )
    }
}


