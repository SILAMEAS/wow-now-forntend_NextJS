import React from 'react';
import {Button, TextField} from "@mui/material";
import {RestaurantRequest} from "@/utils/api/request/RestaurantRequest";

const CreateCategory = ({id}:{id:number}) => {
    const [categoryName, setCategoryName] = React.useState("");
    const req=new RestaurantRequest();
    React.useMemo(()=>{
        req.findRestaurantById(id).then(r => r);
    },[]);
    return (
        <div>
           <TextField value={categoryName} onChange={e=>setCategoryName(e.target.value)}/>
            {/*<Button onClick={}>Create Category</Button>*/}
        </div>
    );
};

export default CreateCategory;
