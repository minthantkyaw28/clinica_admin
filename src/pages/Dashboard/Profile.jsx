import { Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";


import { useState } from "react";
import { Link } from "react-router-dom";

function getUserData(){
    let user = localStorage.getItem("admindata");
    if(user){
        user=JSON.parse(user);
    }else{
        user=null;
    }
    return user;
}

const Profile = () => {

    const[user,setUser]=useState(getUserData());

  return (
    <>
      {user ? (
        <>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {user.user.admin_email}
              </Typography>
              <Typography variant="h5" component="div">
                {user.user._id}
              </Typography>
              <Typography
                width={980}
                sx={{ fontSize: 14 }}
                color="text.secondary"
                component="div"
              >
                {user.token}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </>
      ) : (
        <Link to={"/login"}>To Login</Link>
      )}
    </>
  );
}

export default Profile;