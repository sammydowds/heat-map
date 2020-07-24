## Heat Map 

<p align="center">
    <img src="https://github.com/sammydowds/heat-map/blob/master/public/map_example.PNG" alt="Map Demo" />
</p>

### Purpose
This intended to be a re-usable React component for visually representing data. The component itself can be found [here](https://github.com/sammydowds/heat-map/blob/master/src/components/MapComponent.js), and the associated CSS file [here](https://github.com/sammydowds/heat-map/blob/master/src/components/heatmap.css). 

### Input
The component accepts an array of objects which you are wanting to map, and a color you want the map to be in rgb format. The integer passed in the 'index' attribute should be a number between 1-10. 10 being an opacity of 100%. 

Array of objects structured as follows: 

    index = [{'title': string, 'index': integer (scale of 10)},....]

Color:
 
    color = [int, int, int]

