import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=> {
    const newUpText = text.toUpperCase()
    setText(newUpText)
    // props.showAlert("Converted to UpperCase", "success")
  }
  const handleDoClick = ()=> {
    const newDoText = text.toLowerCase()
    setText(newDoText)
    // props.showAlert("Converted to LowerCase", "success")
  }
  const handleClClick = ()=> {
    const newClText =""
    setText(newClText)
    // props.showAlert("Text has been cleared", "success")
  }
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === "light" ? "#0d2e4e" : "white"}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">

  <textarea className="form-control" id="TextArea" value={text} onChange={handleOnChange} rows="8" colums="4" placeholder='Enter text here'
  style={{backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "light" ? "black" : "white"}}></textarea> 

</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDoClick} >Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick} >Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === "light" ? "#0d2e4e" : "white"}} >
      <h3>Your text Summary</h3>
      <p>{text.split(/\s/).filter((element) => {return element.length !==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes to read</p>
      <h3>Preview</h3> 
      <p>{text.length > 0 ? text : "(Enter something in the textbox above to preview it) "}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ab ad sit quidem aperiam in corporis. Qui, atque odit, error pariatur deleniti quaerat repellat, placeat amet aut voluptatem a.</p>
    </div>
    </>
  )
}
