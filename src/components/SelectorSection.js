import React, {useState} from "react";
import FileListSection from "./FilelistSection";
import FileUploadSection from "./FileUploadSection";

const SelectorSection = (prop) => {


    return (
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <FileListSection/>
                </div>
                <div class="col-6">
                    <FileUploadSection/>
                </div>
            </div>
        </div>
    );
}

export default SelectorSection;