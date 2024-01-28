import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

function CreateGroups(){
    return <div className="createGroups-container">
        <input placeholder="Enter Group Name" className="search-box" ></input>
        <IconButton> <DoneOutlineRoundedIcon></DoneOutlineRoundedIcon> </IconButton>

    </div>   
}
export default CreateGroups;