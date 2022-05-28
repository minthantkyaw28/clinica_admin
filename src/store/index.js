import { configureStore } from "@reduxjs/toolkit";


//Reducers
import authReducer from "./reducers/authReducers";
import registerDoctorReducer from "./reducers/registerDoctorReducers";
import registerPatientReducer from "./reducers/registerPatientReducers";
import registerHospitalReducer from "./reducers/registerHospitalReducers";
import hospitalListReducer from "./reducers/hospitalListReducers";
import hospitalTransactionSingleDayReducer from "./reducers/hospitalTransactionSingleDayReducers";
import transactionSingleMonthReducer from "./reducers/transactionSingleMonthReducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerDoctor: registerDoctorReducer,
    registerPatient: registerPatientReducer,
    registerHospital: registerHospitalReducer,
    HospitalList: hospitalListReducer,
    hospitalTransactionSingleDay: hospitalTransactionSingleDayReducer,
    transactionSingleMonth: transactionSingleMonthReducer,
  },
});

export default store;
