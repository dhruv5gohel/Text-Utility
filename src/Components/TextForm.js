import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpper = () =>{
        setText(text.toUpperCase());
        props.showAlert("Changed to Uppercase", "success");
      }
      
      const handleChange = (event) =>{
        setText(event.target.value);
      }
      
      const handleLower = () =>{
        setText(text.toLowerCase());
        props.showAlert("Changed to Lowercase", "success");
      }
      
      const handleInverse = () =>{
        let newText = "";
        for(let i=0; i<text.length; i++){
          if(text[i] >= 'A' && text[i] <= 'Z'){
            newText += text[i].toLowerCase();
          }
          else if(text[i] >= 'a' && text[i] <= 'z'){
            newText += text[i].toUpperCase();
          }
          else{
            continue;
          }
        }
        setText(newText);
        props.showAlert("Case Inverted", "success");
      }
      
      const handleClear = () =>{
        setText("");
        props.showAlert("Field Cleared", "success");
      }
      
      const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
      }
      
    const [text, setText] = useState("");

  return (
    <>
    <div className="container my-3" style={{color: props.txtCol}}>
        <h1>{props.heading}</h1>
        <textarea rows="10" className="form-control" value={text} onChange={handleChange} id="box"></textarea>
        <button className={`btn btn-${props.mode==="light"?"dark":"primary"} my-3 mx-1`} onClick={handleUpper}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==="light"?"dark":"primary"} my-3 mx-1`} onClick={handleLower}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode==="light"?"dark":"primary"} my-3 mx-1`} onClick={handleInverse}>Inverse Case</button>
        <button className={`btn btn-${props.mode==="light"?"dark":"primary"} my-3 mx-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode==="light"?"dark":"primary"} my-3 mx-1 ${text.length>0?"":"disabled"}`} onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.txtCol}}>
      <p>{text.split(' ').length} words, {text.length} characters</p>
      <p>{text.length / 125} Minutes Read</p>
      <h2>Preview Text</h2>
      <p>{text.length>0?text:"Enter text in above TextField to preview text here"}</p>
    </div>
    </>
  )
}
