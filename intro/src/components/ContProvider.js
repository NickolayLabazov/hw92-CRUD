import React, { useState, useContext } from 'react';
import Context from '../contexts/context.js'

export default function ContProvider(props) {
    const [change, setChange] = useState(0);
    const [changePost, setChangePost] = useState(false);

    return (
        <Context.Provider value={{ change, changePost, setChange, setChangePost }}>
            {props.children}
        </Context.Provider>
    )
}