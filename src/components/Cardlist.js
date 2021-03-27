import React from 'react';
import Card from './Card.js';

const Cardlist = (props) => {
    const { robots } = props;
    const cardArrays = robots.map((user, i) => {
        return (
            <Card key={i}
                name={robots[i].name}
                id={robots[i].id}
                email={robots[i].email} />
        )
    })

    return (
        <div>
            {cardArrays};
        </div>
    );
};

export default Cardlist; 