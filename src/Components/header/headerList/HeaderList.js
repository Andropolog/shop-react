import React from 'react';
import data from '../../../data';
const Headerlist = () => {
    return (
        <ul>
            {data.header.map(item => {
                return(<li key={item}> {item} </li>)
            })}
        </ul>
    );
}

export default Headerlist;