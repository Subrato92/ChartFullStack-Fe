import axios from "axios";
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFileState } from "../reduxStores/CurrentFileSlice";
import {API_GET_FILE_DATA} from "../constants/ServerProperties";

const FileListSection = (prop) => {
    const fileList = useSelector(state => state.filelist);
    const currFileName = useSelector(state => state.currentFileState.fileName);

    const dispatch = useDispatch();

    const fetchData = (e) => {
        console.log(e.target.id);
        let fileId = e.target.id;

        let config = {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
            }
        }

        axios.get(API_GET_FILE_DATA+fileId, config )
            .then((response) => {
                console.log(response.data);
                if(response.status==200){
                    dispatch(updateFileState(response.data));
                }
            });

    }

    const dropDownList = fileList.map((file) => <li><a class="dropdown-item" key={file.fileId} id={file.fileId} value={file.fileName} href="#" onClick={fetchData}>{file.fileId}-{file.fileName}</a></li>);

    return (
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle btn-lg" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {currFileName}
            </a>
        
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {dropDownList}
            </ul>
        </div>
    );
}

export default FileListSection;