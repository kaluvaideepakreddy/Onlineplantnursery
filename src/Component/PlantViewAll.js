import React from "react";
import axios from "axios";

export default class PlantViewAll extends React.Component{
    state ={
        plant:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/plant/viewall')
        .then(res=>{
            const plant = res.data;
            console.log(plant);
            this.setState({plant});
        }).catch((er)=>alert("Problem in fetching"))
    }
    render(){
        return(
            <div>
                <h1> Plant Details </h1>
                <div className="plant_details">
                    <ul className="view_ui">
                        {
                            this.state.plant.map((plant,Index)=>
                            <li key={Index}>
                                <ul>
                                <li>
                                plant_id:{plant.plantId}
                                </li>
                                <li>Name:{plant.commonName}</li>  
                                <li>
                                plantHeight:{plant.plantHeight}
                                </li>
                                <li>
                                plantSpread:{plant.plantSpread}   
                                </li>
                                <li>
                                bloomTime:{plant.bloomTime}
                                </li>
                                <li>
                                medicinalOrCulinaryUse:{plant.medicinalOrCulinaryUse}
                                </li>
                                <li>
                                difficultyLevel:{plant.difficultyLevel}
                                </li>
                                <li>
                                    temperature:{plant.temperature}
                                </li>
                                <li>
                                    typeOfPlant:{plant.typeOfPlant}
                                </li>
                                <li>
                                plantDescription:{plant.plantDescription}
                                </li>
                                <li>
                                plantsStock:{plant.plantsStock} 
                                </li>
                                <li>
                                plantCost:{plant.plantCost}
                                </li>

                                </ul>
                                <br></br>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}