import React from 'react';
import HeatMap from './components/HeatMapComponent'; 

function MainComponent() {
    const color = [0, 0, 255]; 
    const items = [
        {'title': 'Project 1', 'index': 3},
        {'title': 'Project 1', 'index': 1}, 
        {'title': 'Project 1', 'index': 6}, 
        {'title': 'Project 1', 'index': 10},
        {'title': 'Project 1', 'index': 3},
        {'title': 'Project 1', 'index': 2}, 
        {'title': 'Project 1', 'index': 4}, 
        {'title': 'Project 1', 'index': 10}, 
        {'title': 'Project 1', 'index': 1},
        {'title': 'Project 1', 'index': 5}, 
        {'title': 'Project 1', 'index': 5}, 
        {'title': 'Project 1', 'index': 7}, 
        {'title': 'Project 1', 'index': 2},
        {'title': 'Project 1', 'index': 1}, 
        {'title': 'Project 1', 'index': 6}, 
        {'title': 'Project 1', 'index': 10}  
    ]
    return(
        <HeatMap 
            index={items}
            color={color}
        />
    ); 
}

export default MainComponent; 