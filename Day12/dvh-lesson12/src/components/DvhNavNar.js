import React from 'react';
import { Link } from 'react-router-dom';

export default function DvhNavNar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/list-user">List user</Link></li>
                <li><Link to="/creat-user">Create user</Link></li>
            </ul>
        </div>
    );
}