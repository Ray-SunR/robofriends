import React from 'react';
import Card from './Card';

export const CardList = ({ robots }) => {
    if (robots) {
        return robots.map(robot => {
            return <Card key={robot.id} {...robot} />
        });
    } else {
        return null;
    }
}