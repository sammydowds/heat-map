import React from 'react';
import './heatmap.css';

function mapGrid(props) {
    let map = props.index.map((square) => {
        let style = {
            backgroundColor: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, ${square.index/10})` 
        }
        return (
            <div className='grid-item' style={style}>
                <p className='grid-description align-middle'>
                    {square.top}
                    <br></br>
                    {square.left}&nbsp; 
                    <span className='grid-number'>
                        {square.display}
                    </span>
                    &nbsp;{square.right}
                    <br></br>
                    <span>
                        {square.bottom}
                    </span>
                </p>
            </div>
        ); 
    });
    return map; 
}

function HeatMap(props) {
    let grid = mapGrid(props); 
    return (
        <div className='grid-container'>
            {grid}
        </div>
    ); 
}

export default HeatMap; 