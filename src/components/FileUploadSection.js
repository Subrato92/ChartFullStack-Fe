import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addFile } from "../reduxStores/FilelistSlice";
import { API_LOAD_CSV } from "../constants/ServerProperties";


const FileUploadSection = (prop) => {
    const fileList = useSelector(state => state.filelist);
    const currFileName = useSelector(state => state.currentFileState.fileName);

    const dropDownList = fileList.map((file) => <li><a class="dropdown-item" key={file.fileId} href="#">{file.fileId}-{file.fileName}</a></li>);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log('event.target');
        console.log(event);

        let config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
            }
        }

        axios.post(API_LOAD_CSV, {
                file: event.target[0].files[0]
            },config)
            .then((response) => {
                if(response.status==200){
                    console.log('response.data:'+response.data);
                    let respJson = {};
                    respJson.fileId = response.data.fileId;
                    respJson.fileName = response.data.fileName;
                    console.log(respJson);
                    dispatch(addFile(respJson));
                }
            })
            .catch((exception) => {
                console.error('Exception Occured');
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                <button class="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">Upload</button>
            </div>
        </form>
    );
}

export default FileUploadSection;