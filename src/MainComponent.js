import React from 'react';
import HeatMap from './components/HeatMapComponent'; 

function MainComponent() {
    const color = [255,165,0]; 
    const items = [
        {'title': 'Engineering for project 1 testing this', 'display': 7, 'index': 3},
        {'title': 'Project 2', 'display': 9,'index': 1}, 
        {'title': 'Project 3', 'display': 4,'index': 6}, 
        {'title': 'Project 4', 'display': 1,'index': 10},
        {'title': 'Project 5', 'display': 3,'index': 3},
        {'title': 'Project 6', 'display': 8,'index': 2}, 
        {'title': 'Project 7', 'display': 6,'index': 4}, 
        {'title': 'Project 8', 'display': 2,'index': 8}, 
        {'title': 'Project 9', 'display': 9,'index': 1},
        {'title': 'Project 10', 'display': 5,'index': 5}, 
        {'title': 'Project 11', 'display': 7,'index': 3}, 
        {'title': 'Project 12', 'display': 3,'index': 7}
    ]
    return(
        <HeatMap 
            index={items}
            color={color}
        />
    ); 
}

export default MainComponent; 