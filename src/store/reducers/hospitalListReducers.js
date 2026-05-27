import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { admin } from "../../Data/AdminData";

//Auth State
const initialHospitalListState = {
  data: null,
  loading: false,
  error: null,
};

export const HospitalListfunc = createAsyncThunk("HospitalList", async () => {
 
  // Make GET request to login API and get response
  const response = await fetch(
    `https://clinica-app.onrender.com/hospital_clinic`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${admin.token}`,
      }
    }
  );

  // If login successful, return JSON data
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    // If login fails, throw an error
    throw new Error("Hospital Register failed");
  }
});

const HospitalListSlice = createSlice({
  name: "HospitalList",
  initialState: initialHospitalListState,
  extraReducers: (builder) => {
    builder
      .addCase(HospitalListfunc.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(HospitalListfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(HospitalListfunc.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message; // Set the error message
      });
  },
});

export const HospitalListActions = HospitalListSlice.actions;

export default HospitalListSlice.reducer;
