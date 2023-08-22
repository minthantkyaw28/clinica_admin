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

import AddDoctor from "../../components/Doctors/AddDoctor.jsx";


import { Link } from "react-router-dom";

// Generate Order Data
function createData(id, nrc, name, email, phone, specialty, qualification) {
  return { id, nrc, name, email, phone, specialty, qualification };
}

const rows = [
  createData(
    0,
    "SaMa-789512",
    "U Tin Yi",
    "tinyi@gmail.com",
    "09974001888",
    "Cardiology",
    "Phd"
  ),
  createData(
    1,
    "SaMa-9090",
    "U Oppenheimer",
    "oppenheimer@gmail.com",
    "09965591499",
    "Surgery",
    "M.B.B.S"
  ),
  createData(
    2,
    "SaMa-8400",
    "U Saw Phyu",
    "sawphyu@gmail.com",
    "09974001955",
    "Allergy",
    "M.B.B.S"
  ),
  createData(
    3,
    "SaMa-84984",
    "Daw Win Win",
    "win2@gmail.com",
    "09974001970",
    "Neurology",
    "M.B.B.S"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const DoctorList = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={10}></Grid>
          <Grid item xs={2} align="right">
            <AddDoctor></AddDoctor>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Title>
                <Typography variant="h5" gutterBottom>
                  All the Doctors in Hospital
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
                        Specialty
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Qualification
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
                          {row.specialty}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.qualification}
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

export default DoctorList;
