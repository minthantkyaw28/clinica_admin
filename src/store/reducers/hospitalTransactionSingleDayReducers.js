import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { admin } from "../../Data/AdminData";

//Single Day Transaciton State
const initialHospitalTransactionSingleDayState = {
  data: null,
  loading: false,
  error: null,
};

export const hospitalTransactionSingleDayfunc = createAsyncThunk(
  "transactionSingleDay",
  async (formData) => {
    // Transform form data to JSON
    const jsonData = JSON.stringify(formData);
   
    // const url="https://clinica-app.onrender.com/cost_count_by_day_of_hospital_at_admin/"
    // Make GET request to login API and get response
    const response = await fetch(
      `https://clinica-app.onrender.com/cost_count_by_day_of_hospital_at_admin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.token}`,
        },
        body: jsonData,
      }
    );

    // If login successful, return JSON data
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // If login fails, throw an error
      throw new Error("Single Day Transaction failed");
    }
  }
);

const hospitalTransactionSingleDaySlice = createSlice({
  name: "hospitalTransactionSingleDay",
  initialState: initialHospitalTransactionSingleDayState,
  extraReducers: (builder) => {
    builder
      .addCase(hospitalTransactionSingleDayfunc.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(hospitalTransactionSingleDayfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(hospitalTransactionSingleDayfunc.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message; // Set the error message
      });
  },
});

export const hospitalTransactionSingleDayActions =
  hospitalTransactionSingleDaySlice.actions;

export default hospitalTransactionSingleDaySlice.reducer;
