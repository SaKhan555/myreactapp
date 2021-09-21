import React, { Component } from 'react'
import { Button } from './Button';
import { Table } from './Table';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Create } from './Create';
import CardTemplate from './CardTemplate';


export const Card = (props) => {
    return (
        <CardTemplate title="All Users">
            <Table users={[]} />
        </CardTemplate>
    );
}
