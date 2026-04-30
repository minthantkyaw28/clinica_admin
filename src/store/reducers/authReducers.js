import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Auth State
const initialAuthState = {   
    data: null, 
    loading: false,
    error: null };

// custom data fetch action
export const loginfunc = createAsyncThunk("login", async (formData) => {
  
      // Transform form data to JSON
      const jsonData = JSON.stringify(formData);

      // Make POST request to login API and get response
      const response = await fetch(
        "https://clinica-app.onrender.com/admin_login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonData,
        }
      );

      // If login successful, return JSON data
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("admindata", JSON.stringify(data));
        return data;
      } else {
        // If login fails, throw an error
        throw new Error("Login failed");
      }

}); 

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  // reducers: {
  //   login(state) {
  //     state.isLogin = true;
  //   },
  //   logout(state) {
  //     state.isLogin = false;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loginfunc.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error=null;
      })
      .addCase(loginfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(loginfunc.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message; // Set the error message
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
