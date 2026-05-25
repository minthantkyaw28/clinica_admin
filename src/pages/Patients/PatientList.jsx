import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../library/Title";

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AddPatient from "../../components/Patients/AddPatient";
import EditPatient from "../../components/Patients/EditPatient";

import { Link } from "react-router-dom";

// Generate Order Data
function createData(id, nrc, name, email, phone, address) {
  return { id, nrc, name, email, phone, address };
}

const rows = [
  createData(
    0,
    "12/mgzaw(N)129754",
    "U Mg Zaw",
    "mgzaw@gmail.com",
    "098834567891",
    "Yangon"
  ),
  createData(
    1,
    "14/KhaLaTa(N)044784",
    "U Lu Maw",
    "lumaw@gmail.com",
    "09964489667",
    "Yangon"
  ),
  createData(
    2,
    "8/MaYaKha(N)342189",
    "Daw San Mya",
    "sanmya@gmail.com",
    "09964489668",
    "Yangon"
  ),
  createData(
    3,
    "9/SaKaMa(N)239123",
    "Daw Sein Kyi",
    "seinkyi@gmail.com",
    "09964489663",
    "Yangon"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}


const PatientList = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={10}></Grid>
          <Grid item xs={2} align="right">
            <AddPatient></AddPatient>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Title>
                <Typography variant="h5" gutterBottom>
                  All the Patients in Clinica System
                </Typography>
              </Title>
              <Table size="large" sx={{ minWidth: 900 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        NRC
                      </Typography>
                    </TableCell>
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
                        Detail
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
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.nrc}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.email}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.phone}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.address}
                        </Typography>
                      </TableCell>

                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          <Link to={"/patient-details"}>Detail</Link>
                        </Typography>
                      </TableCell>

                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          <EditPatient></EditPatient>
                        </Typography>
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

export default PatientList;
