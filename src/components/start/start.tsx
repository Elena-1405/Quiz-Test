import React from 'react';
import { test } from '../../mock/test'


export const Start: React.FC = () => {
    return (
    <div className='start'>
        <div>
            <p>{test.title}</p>
            <button className='start-button' type='button'>Start</button>
        </div>
    </div>
)}