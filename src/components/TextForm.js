import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("CLICKED"+text)
        setText(text.toUpperCase())
        props.showAlert("Converted to UPPERCASE", "success")
    }
    const handleLoClick = () => {
        // console.log("CLICKED"+text)
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase", "success")
    }
    const handleOnChange = (event) => {
        // console.log("CHanged")
        setText(event.target.value)
    }
    const handleClrClick = () => {
        // console.log("CHanged")
        setText("")
        props.showAlert("All text cleared", "success")
    }
    const  [text, setText] = useState('');
  return (
    <>
    <div className='container'>   
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} rows="5" onChange={handleOnChange} placeholder="Enter your text..."></textarea>
        </div>
        <div className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</div>
        <div className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</div>
        <div className="btn btn-primary" onClick={handleClrClick}>Clear Text</div>
    </div>
    <div className="container my-5">

        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} charecters</p>
        <p>{0.008*(text.split(" ").length-1)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.lenght>0?text:"Enter something in text box to preview"}</p>
    </div>
    </>
  )
}
