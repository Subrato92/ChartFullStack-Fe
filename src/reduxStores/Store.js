import { configureStore } from "@reduxjs/toolkit";
import FileListReducer from "./FilelistSlice";
import CurrentFileReducer from "./CurrentFileSlice";

export default configureStore({
    reducer : {
        filelist: FileListReducer,
        currentFileState: CurrentFileReducer
    }
});