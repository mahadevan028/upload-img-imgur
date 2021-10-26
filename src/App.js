import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
import ImageInput from './components/ImageInput_Component/ImageInput';
import ImageDisplay from './components/ImageDisplay_Component/ImageDisplay';
import {CLIENT_ID} from './Auth_constants';
import Particles from 'react-particles-js';
import { ToastContainer, toast } from 'react-toastify';


const options = {
  particles: {
    number: {
      value: 50,
      density: {
        value_area: 250,
        enable: true
      }
    }
  }
}

function App() {

  const [fileInfo, setFileInfo] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


 const onInputChangeCallback = (event) => {
   setFileInfo(event.target.files[0])
   const objectUrl = URL.createObjectURL(event.target.files[0])
   setImgUrl(objectUrl)
 }

 const onUploadImageCallback = () => {
   if(!fileInfo){
    toast("Please choose a file to upload", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      type:'error',
      theme:'dark'});
      return;
   }
   setIsLoading(true)
   const postData = new FormData();
   postData.append("image", fileInfo);
   axios({
    method: 'post',
    url: 'https://api.imgur.com/3/image',
    data: postData,
    headers: {
      Authorization: 'Client-ID ' +CLIENT_ID ,
    }
  })
  .then(response => {
    // setImgUrl(response.data.data.link)
    setIsLoading(false)
    toast("Image Uploaded Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      type:'success',
      theme:'dark'});
  }).catch(err => {
    setIsLoading(false)
    toast("Something went wrong while uploading", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      type:'error',
      theme:'dark'});
  });
 }
  
  return (
    <div className="App">
      <Particles className='particles'
          params={options} />
     <ImageInput onInputChange={onInputChangeCallback} onUploadImage={onUploadImageCallback} isLoading={isLoading} />
     <ImageDisplay imageUrl={imgUrl}/>
     <ToastContainer />
    </div>
  );
}

export default App;
