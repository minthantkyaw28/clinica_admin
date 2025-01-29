import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Deposits from "../../library/Deposits";
import Orders from "../../library/Orders";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { hospitalTransactionSingleDayfunc } from "../../store/reducers/hospitalTransactionSingleDayReducers";

import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import DatePickerCom from "../../components/Hospital/DatePickerCom";

const HospitalPayment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

      const { data, loading, error } = useSelector(
        (state) => state.hospitalTransactionSingleDay
      );

      useEffect(() => {
        const fetchData = async () => {
          try {
            let Data = {
              id:id,
              date_time: `${dayjs()}`,
            };

            dispatch(hospitalTransactionSingleDayfunc(Data,id));
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, [dispatch,id]); 

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12} md={12} lg={10}></Grid>
          <Grid item xs={12} md={12} lg={2} align="right">
           <DatePickerCom ID={id}></DatePickerCom>
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
                  MainTitle={"Total Patients"}
                  Number={data.patient_count}
                  date={`${data.patient_cost} mmk`}
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
                  MainTitle={"Total Cost"}
                  Number={data.total_cost}
                  date={""}
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
  );
};

export default HospitalPayment;
