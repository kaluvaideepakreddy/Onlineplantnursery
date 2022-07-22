import { Button } from "@mui/material";
import {useNavigate} from"react-router-dom";

const Plant =()=>{
    const navigate = useNavigate();
    return(
        <div>
            Plant
            <ul><Button variant="outlined" color="success" onClick={()=>navigate('/Add')} > Add</Button></ul>
            <ul><Button variant="outlined" color="error" onClick={()=>navigate('/Update')}>Update</Button></ul>
            <ul><Button variant="outlined" color="warning" onClick={()=>navigate('/Delete')}>Delete</Button></ul>
            <ul><Button variant="outlined" color="secondary" onClick={()=>navigate('/PlantViewAll')} >  View </Button></ul>
        </div>
    )

}

export default Plant;