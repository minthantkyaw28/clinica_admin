import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Deposits from "../../library/Deposits";
import Orders from "../../library/Orders";

import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { transactionSingleMonthfunc } from "../../store/reducers/transactionSingleMonthReducers";

import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import { Typography } from "@mui/material";


const Dashboard = () => {

   const dispatch = useDispatch();

   const { data, loading, error } = useSelector(
     (state) => state.transactionSingleMonth
   );

   useEffect(() => {
     const fetchData = async () => {
       try {
         let Data = {
           date_time: `${dayjs()}`,
         };

         dispatch(transactionSingleMonthfunc(Data));
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
     fetchData();
   }, [dispatch]); 

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h5">This Month Report</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={6} align="right">
            {/* <DatePickerCom></DatePickerCom> */}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {!data && error && error.message}
          {loading && (
            <Grid item xs={12} md={12} lg={12}>
              <CircularProgress
                color="inherit"
                sx={{ width: "100%", height: "100%" }}
              />
            </Grid>
          )}
        </Grid>
        {data && (
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits
                  MainTitle={"Total Income"}
                  Number={data.total_cost}
                  date={"MMK"}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits
                  MainTitle={"Total Hospital"}
                  Number={data.hospital_count}
                  date={`${data.hospital_cost} mmk`}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits
                  MainTitle={"Total Patients"}
                  Number={data.patient_count}
                  date={"This Month"}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits
                  MainTitle={"Total Doctors"}
                  Number={data.doctor_count}
                  date={`${data.doctor_cost} mmk`}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits
                  MainTitle={"Total Records"}
                  Number={data.record_count}
                  date={`${data.record_cost} mmk`}
                />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        )}
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </>

    // <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    //   <Grid container spacing={2}>

    //     <Grid item xs={12} md={4} lg={3}>
    //       <Paper
    //         sx={{
    //           p: 2,
    //           display: "flex",
    //           flexDirection: "column",
    //           height: 240,
    //         }}
    //       >
    //         <Deposits
    //           MainTitle={"Total Patients"}
    //           Number={400}
    //           date={"Today"}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} md={4} lg={3}>
    //       <Paper
    //         sx={{
    //           p: 2,
    //           display: "flex",
    //           flexDirection: "column",
    //           height: 240,
    //         }}
    //       >
    //         <Deposits
    //           MainTitle={"Total Doctors"}
    //           Number={12}
    //           date={"Today"}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} md={4} lg={3}>
    //       <Paper
    //         sx={{
    //           p: 2,
    //           display: "flex",
    //           flexDirection: "column",
    //           height: 240,
    //         }}
    //       >
    //         <Deposits
    //           MainTitle={"Total Records"}
    //           Number={400}
    //           date={"Today"}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} md={4} lg={3}>
    //       <Paper
    //         sx={{
    //           p: 2,
    //           display: "flex",
    //           flexDirection: "column",
    //           height: 240,
    //         }}
    //       >
    //         <Deposits
    //           MainTitle={"Total Cost"}
    //           Number={20000}
    //           date={"Today"}
    //         />
    //       </Paper>
    //     </Grid>
    //     {/* Recent Orders */}
    //     <Grid item xs={12}>
    //       <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
    //         <Orders />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   {/* <Copyright sx={{ pt: 4 }} /> */}
    // </Container>
  );
};

export default Dashboard;
