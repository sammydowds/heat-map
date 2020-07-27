import React, { Component } from 'react';
import './heatmap.css';

class HeatMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.index, 
            color: this.props.color 
        }
    }

    mapGrid() {
        let map = this.state.index.map((square) => {
            let style = {
                backgroundColor: `rgb(${this.state.color[0]}, ${this.state.color[1]}, ${this.state.color[2]}, ${square.index/10})` 
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