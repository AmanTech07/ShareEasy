const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector(".browseBtn");

dropZone.addEventListener("dragover", (e)=>{        // dragover is specified event
    e.preventDefault();
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged"); 
    }   
})

dropZone.addEventListener("dragleave", ()=>{        // dragleave is specified event
    dropZone.classList.remove("dragged");    
})

dropZone.addEventListener("drop", (e)=>{             // drop is specified event
    e.preventDefault();
    dropZone.classList.remove("dragged"); 
    const files = e.dataTransfer.files;
    // console.log(files);
    if(files.length){
        fileInput.files = files;
        uploadFile();
    }  
})

browseBtn.addEventListener("click", ()=>{  
    fileInput.click();                                // this means that when we are clicking on    browse Btn then automatically it clicks the file input section
})

const uploadFile = () => {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("myfile", file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
    }

    xhr.open("POST", uploadURL);
    xhr.send(formData);
}