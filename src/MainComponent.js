import React from 'react';
import HeatMap from './components/HeatMapComponent'; 

function MainComponent() {
    const color = [255,165,0]; 
    const items = [
        {'title': 'Project 1', 'index': 3},
        {'title': 'Project 2', 'index': 1}, 
        {'title': 'Project 3', 'index': 6}, 
        {'title': 'Project 4', 'index': 10},
        {'title': 'Project 5', 'index': 3},
        {'title': 'Project 6', 'index': 2}, 
        {'title': 'Project 7', 'index': 4}, 
        {'title': 'Project 8', 'index': 8}, 
        {'title': 'Project 9', 'index': 1},
        {'title': 'Project 10', 'index': 5}, 
        {'title': 'Project 11', 'index': 3}, 
        {'title': 'Project 12', 'index': 7}
    ]
    return(
        <HeatMap 
            index={items}
            color={color}
        />
    ); 
}

export default MainComponent; 