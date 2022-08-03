import React from 'react';

const ListItem = ({song}) => {
    return (<li>
            <h2>{song.title.label}</h2>
            <img src={song["im:image"][2].label} />
            <audio controls>
                <source src={song.link[1].attributes.href} type="audio/aac"/>
            </audio>
        </li>)
};

export default ListItem;