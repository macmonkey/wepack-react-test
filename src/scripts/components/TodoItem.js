/**
 * Created by Jenson on 23.12.16.
 */
import React from 'react';
import TweenMax from 'gsap';

import './TodoItem.scss';

export default class TodoItem extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {clicked: false}

        console.log('props', props);


        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(event)
    {
        this.setState({clicked: !this.state.clicked});
        console.log('iam clicked', this)

        this.props.onUpdate((this.state.clicked) ? -1 : 1);
        // this.props.onUpdate();

    }

    tweenItem(color)
    {
        TweenMax.to(this.refs.myDiv, .3, {backgroundColor: color})
    }

    setState(state, callback)
    {
        console.log(state.clicked);
        if (state.clicked == true)
        {
            this.tweenItem('#ff00aa');
        } else
        {
            this.tweenItem('#3e3e3e');
        }
        super.setState(state, callback);
    }

    render()
    {
        return (
            <div ref="myDiv" onClick={this.onClickItem}
                 className="todoItem">
                <span>: {this.props.item.name}</span>
            </div>
        )
    }
}
