/**
 * Created by Jenson on 26.12.16.
 */

import React from 'react';

export default class ItemCounter extends React.Component {

    render()
    {
        let itemsClicked = this.props.itemsClicked;
        return (
            <span>Items clicked {itemsClicked}</span>
        )
    }
}

