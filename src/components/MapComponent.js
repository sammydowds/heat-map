import React, { Component } from 'react'; 

class HeatMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: [
                {'title': 'project 1', 'index': 1}, 
                {'title': 'project 2', 'index': 3}, 
                {'title': 'project 3', 'index': 3},
                {'title': 'project 3', 'index': 2}, 
                {'title': 'project 3', 'index': 1}, 
                {'title': 'project 3', 'index': 0}, 
                {'title': 'project 3', 'index': 5}, 
                {'title': 'project 3', 'index': 8}, 
                {'title': 'project 3', 'index': 4} 
            ], 
            color: [255, 165, 0], 
        }
    }

    mapGrid() {
        let map = this.state.index.map((square) => {
            let style = {
                backgroundColor: `rgb(${this.state.color[0]}, ${this.state.color[1]}, ${this.state.color[2]}, ${square.index/10})` 
            }
            return (
                <div className='grid-item' style={style}>
                    {square.title}
                </div>
            ); 
        });
        return map; 
    }

    render() {
        let grid = this.mapGrid(); 
        return(
            <div className='grid-container'>
                {grid}
            </div>
        ); 
    }
}

export default HeatMap; 