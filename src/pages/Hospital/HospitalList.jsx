

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../library/Title.jsx";

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AddHospital from "../../components/Hospital/AddHospital.jsx";
import EditHospital from "../../components/Hospital/EditHospital.jsx";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { HospitalListfunc } from "../../store/reducers/hospitalListReducers.js";

import { useEffect } from "react";
import HospitalPayment from "./HospitalPayment.jsx";

function preventDefault(event) {
  event.preventDefault();
}


  
const HospitalList = () => {

   const dispatch = useDispatch();

   const { data, loading, error } = useSelector((state) => state.HospitalList);

   useEffect(() => {
     const fetchData = async () => {
       try {
       
         dispatch(HospitalListfunc());
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
     fetchData();
   }, [dispatch]); 
   

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={10}></Grid>
          <Grid item xs={2} align="right">
            <AddHospital></AddHospital>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Title>
                <Typography variant="h5" gutterBottom>
                  All the Hospitals in Clinica System
                </Typography>
              </Title>
              <Table size="large" sx={{ minWidth: 900 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Name
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Email
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Phone
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Address
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Payment
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Edit
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data.map((row) => (
                      <TableRow key={row._id}>
                        <TableCell align="left">
                          <Typography variant="body1" gutterBottom>
                            {row.hospital_clinic_name}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography variant="body1" gutterBottom>
                            {row.hospital_clinic_email}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography variant="body1" gutterBottom>
                            {row.hospital_clinic_phone}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography variant="body1" gutterBottom>
                            {row.hospital_clinic_address}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Link to={`/hospital-payment/${row._id}`}>
                            Payment
                          </Link>
                        </TableCell>
                        <TableCell align="left">
                          <EditHospital></EditHospital>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 6 }}
              >
                See more
              </Link>
            </Paper>
          </Grid>
        </Grid>

        {/* <Grid container spacing={3}> */}
        {/* Recent Orders */}

        {/* </Grid> */}
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </>
  );
};

export default HospitalList;
