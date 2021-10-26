import React from 'react'
import { Button,Form } from 'react-bootstrap';
import './ImageInput.css';
import { Spinner } from 'react-bootstrap';

function ImageInput({onInputChange, onUploadImage, isLoading}) {
    return (
        <div>
            <p>{'Choose the image that needs to be uploaded'}</p>
            <div className="input-field">
                <div className="custom-input">
                    <Form className="custom-control">
                        <Form.Control type="file" accept="image/*" onChange={onInputChange}/>
                    </Form>
                <span style={{paddingLeft: 10}}><Button disabled={isLoading} className="button-primary" variant="primary" onClick={() => onUploadImage()}>
                    {isLoading? <span><Spinner animation="border" size="sm"/> Uploading...</span>: "Upload"}</Button>
                </span></div>
            </div>
        </div>
    );
}

export default ImageInput
