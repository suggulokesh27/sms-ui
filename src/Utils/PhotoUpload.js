import axios from "axios";
import React, { useEffect, useState } from "react";

const PhotoUpload = ({ show, handleClose, photoName }) => {
  const [file, setFile] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const bootstrap = require('bootstrap');
  const [photoDisEntity, setPhotoDisEntity] = useState({});

  useEffect(() => {
    if (show) {
      const modalElement = document.getElementById('exampleModal');
      const myModal = new bootstrap.Modal(modalElement, {
        keyboard: false
      });
      myModal.show();
      modalElement.addEventListener('hidden.bs.modal', handleClose);
    }
  }, [show]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async() => {
    // Handle file upload logic here
    const formData = new FormData();
    formData.append("photo",file)
    try {
      const response = await axios.post('http://localhost:8080/api/v1/photos/upload', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
      console.log('Photo saved successfully:', response.data);
    photoName(response.data);

  } catch (error) {
      console.error('Error saving photo:', error);
  }
    console.log(file);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    const modalElement = document.getElementById('exampleModal');
    const myModal = new bootstrap.Modal(modalElement);
    myModal.hide();
    handleClose();

    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const handleTakePicture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);

      const videoElement = document.getElementById('cameraVideo');
      videoElement.srcObject = stream;
      videoElement.play();
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access the camera. Please check your permissions.");
    }
  };

  const handleCapturePicture = () => {
    const videoElement = document.getElementById('cameraVideo');
    const canvasElement = document.createElement('canvas');
    const context = canvasElement.getContext('2d');

    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

    canvasElement.toBlob(blob => {
      setFile(blob);
      handleCloseModal();
    }, 'image/jpeg');
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Upload Image</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Choose an image</label>
              <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className="mb-3">
              <button className="btn btn-secondary" onClick={handleTakePicture}>Take a Picture</button>
              {cameraStream && (
                <>
                  <video id="cameraVideo" width="100%" autoPlay></video>
                  <button className="btn btn-primary mt-2" onClick={handleCapturePicture}>Capture Picture</button>
                </>
              )}
            </div>
            <div className="mb-3">
              <button className="btn btn-secondary" onClick={() => document.getElementById('formFile').click()}>Upload from Local</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleFileUpload}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoUpload;
