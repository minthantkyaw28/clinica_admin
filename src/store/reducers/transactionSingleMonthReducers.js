import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { admin } from "../../Data/AdminData";


//Single Day Transaciton State
const initialTransactionSingleMonthState = {
  data: {},
  loading: false,
  error: false,
};


export const transactionSingleMonthfunc = createAsyncThunk(
  "transactionSingleMonth",
  async (formData, { rejectWithValue }) => {
    // Transform form data to JSON
    const jsonData = JSON.stringify(formData);
    // const url=
    // Make GET request to login API and get response
    try {
      const response = await fetch(
        `https://clinica-app.onrender.com/total_cost_count_by_month_admin`,
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
        console.log(data);
        return data;
      } else {
        // If login fails, throw an error
        throw new Error("Single Month Transaction failed");
      }
    } catch (error) {
      // If any error occurs, return the error data
      return rejectWithValue(error);
    }
  }
);

const transactionSingleMonthSlice = createSlice({
  name: "transactionSingleMonth",
  initialState: initialTransactionSingleMonthState,
  extraReducers: (builder) => {
    builder
      .addCase(transactionSingleMonthfunc.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(transactionSingleMonthfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(transactionSingleMonthfunc.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message; // Set the error message
      });
  },
});

export const transactionSingleMonthActions =
  transactionSingleMonthSlice.actions;

export default transactionSingleMonthSlice.reducer;
