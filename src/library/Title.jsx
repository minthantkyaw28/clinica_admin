
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
// chore: note 2025-12-24T13:05:00
