import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { admin } from "../../Data/AdminData";

//Auth State
const initialRegisterPatientState = {
  data: null,
  loading: false,
  error: null,
};

export const registerPatientfunc = createAsyncThunk(
  "registerPatient",
  async (formData) => {
    // Transform form data to JSON
    const jsonData = JSON.stringify(formData);
    // const url=
    // Make POST request to login API and get response
    const response = await fetch(
      `https://clinica-app.onrender.com/patients`,
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
      throw new Error("Patient Register failed");
    }
  }
);

const registerPatientSlice = createSlice({
  name: "registerPatient",
  initialState: initialRegisterPatientState,
  extraReducers: (builder) => {
    builder
      .addCase(registerPatientfunc.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(registerPatientfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(registerPatientfunc.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message; // Set the error message
      });
  },
});

export const registerPatientActions = registerPatientSlice.actions;

export default registerPatientSlice.reducer;
