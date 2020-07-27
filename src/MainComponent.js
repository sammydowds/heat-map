import React from 'react';
import HeatMap from './components/HeatMapComponent'; 

function MainComponent() {
    const color = [255,165,0]; 
    const items = [
        {'top': 'Project 1', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 2,'index': 8},
        {'top': 'Project 2', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 9,'index': 1}, 
        {'top': 'Project 3', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 4,'index': 6}, 
        {'top': 'Project 4', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 1,'index': 10},
        {'top': 'Project 5', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 3,'index': 3},
        {'top': 'Project 6', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 8,'index': 2}, 
        {'top': 'Project 7', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 6,'index': 4}, 
        {'top': 'Project 8', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 2,'index': 8}, 
        {'top': 'Project 9', 'bottom':'bottom', 'left': 'left', 'right': 'right', 'bottom': 'bottom', 'display': 9,'index': 1},
        {'top': 'Project 10','bottom':'bottom', 'left': 'left', 'right': 'right' , 'bottom': 'bottom', 'display': 5,'index': 5}, 
        {'top': 'Project 11','bottom':'bottom', 'left': 'left', 'right': 'right' , 'bottom': 'bottom', 'display': 7,'index': 3}, 
        {'top': 'Project 12','bottom':'bottom', 'left': 'left', 'right': 'right' , 'bottom': 'bottom', 'display': 3,'index': 7}
    ]
    return(
        <HeatMap 
            index={items}
            color={color}
        />
    ); 
}

export default MainComponent; 