import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fileName: "Select File Name",
    dataSet: [{x: 10,y: 5.55}],
    intercept: 0,
    coef: 0,
    fitCurve: [{x: 10,y: 5.55}]
};

export const CurrentFileSlice = createSlice({
    name: 'currentFileState',
    initialState,
    reducers: {
        updateFileState: (state, action) => {
            state.fileName = action.payload.fileName;
            state.dataSet = action.payload.dataSet;
            state.intercept = action.payload.intercept;
            state.coef = action.payload.coef;
            state.fitCurve = action.payload.fitCurve;
            //console.log(JSON.stringify(state));
        }
    }
});

export const { updateFileState } = CurrentFileSlice.actions;

export default CurrentFileSlice.reducer;