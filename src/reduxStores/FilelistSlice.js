import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    fileName: 'Test File Name',
    fileId: '0'
}];

export const FileListSlice = createSlice({
    name: 'filelist',
    initialState,
    reducers: {
        addFile: (state, action) =>{
            console.log('nwFile:'+JSON.stringify(action.payload));
            state.push(action.payload);    
        }
    }
});

export const { addFile } = FileListSlice.actions;

export default FileListSlice.reducer;