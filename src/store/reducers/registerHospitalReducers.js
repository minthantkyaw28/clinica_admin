import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { admin } from "../../Data/AdminData";

//Auth State
const initialRegisterHospitalState = {
  data: null,
  loading: false,
  error: null,
};

export const registerHospitalfunc = createAsyncThunk(
  "registerHospital",
  async (formData) => {
    // Transform form data to JSON
    const jsonData = JSON.stringify(formData);
    // const url=
    // Make POST request to login API and get response
    const response = await fetch(
      `https://clinica-app.onrender.com/hospital_clinic`,
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
      throw new Error("Hospital Register failed");
    }
  }
);

const registerHospitalSlice = createSlice({
  name: "registerHospital",
  initialState: initialRegisterHospitalState,
  extraReducers: (builder) => {
    builder
      .addCase(registerHospitalfunc.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(registerHospitalfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(registerHospitalfunc.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message; // Set the error message
      });
  },
});

export const registerHospitalActions = registerHospitalSlice.actions;

export default registerHospitalSlice.reducer;
