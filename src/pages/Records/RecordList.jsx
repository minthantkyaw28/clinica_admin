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

import RefreshRecord from "../../components/Records/RefreshRecord.jsx";

import { Link } from "react-router-dom";
// import { purple, green, teal } from "@mui/material/colors";

function createData(id, date, illeness, patient, doctor, hospital) {
  return { id, date, illeness, patient, doctor, hospital };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "High Fever",
    "U Kyaw Kyaw",
    "U Tin Yi",
    "Golden Gate Hospital"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "High Fever",
    "U Kyaw Kyaw",
    "U Oppenheimer",
    "Golden Gate Hospital"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "High Fever",
    "U Kyaw Kyaw",
    "U Saw Phyu",
    "Golden Gate Hospital"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "High Fever",
    "U Kyaw Kyaw",
    "Daw Win Win",
    "Golden Gate Hospital"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const RecordList = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={10}></Grid>
          <Grid item xs={2} align="right">
            <RefreshRecord></RefreshRecord>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Title>
                <Typography variant="h5" gutterBottom>
                  All the Records in Clinica System
                </Typography>
              </Title>
              <Table size="large" sx={{ minWidth: 920 }} width="auto">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Date
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Illness
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Patient
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Doctor
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Hospital
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        Detail
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.illeness}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.patient}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.doctor}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          {row.hospital}
                        </Typography>
                      </TableCell>

                      <TableCell align="left">
                        <Typography variant="body1" gutterBottom>
                          <Link to={"/patient-details"}>Detail</Link>
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
      </Container>
    </>
  );
};

export default RecordList;
