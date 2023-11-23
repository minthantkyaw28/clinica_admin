import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {

  const {MainTitle,Number,date}=props;

  return (
    <React.Fragment>
      <Title>{MainTitle}</Title>
      <Typography component="p" variant="h4">
        {Number}
        <Typography component="p">
          {MainTitle == "Total Cost" ? "MMK" : ""}
        </Typography>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {date}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Detail
        </Link>
      </div>
    </React.Fragment>
  );
}
