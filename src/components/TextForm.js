import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("uppercase was clicked");
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handleLowClick = ()=>{
        //console.log("uppercase was clicked");
        let newtext = text.toLowerCase()
        setText(newtext)
    }

     const handleSpacesClick = ()=>{
        //console.log("uppercase was clicked");
        let newtext = text.replace(/[ ]{2,}/gi," ")
        setText(newtext)
    }

    const handleClearClick = ()=>{
        //console.log("uppercase was clicked");
        //let newtext = text.toLowerCase()
        setText('')
    }

    const handleChange = (event)=>{
        //console.log("on Change");
        setText(event.target.value)
    }

    const [text,setText] = useState('')

    //style={{color: props.mode==='dark'?'white':'black'}}
  return (
      <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3" style={{border : '1px solid black'}}>
          <textarea className="form-control" style={{backgroundColor: props.mode}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="9"></textarea>
        </div>
        <button className={`btn btn-${props.mode==='red'?'danger':props.mode==='lightgreen'?'success':'primary'} mx-3`}  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==='red'?'danger':props.mode==='lightgreen'?'success':'primary'} mx-3`}  onClick={handleLowClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode==='red'?'danger':props.mode==='lightgreen'?'success':'primary'} mx-3`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.mode==='red'?'danger':props.mode==='lightgreen'?'success':'primary'} mx-3`}  onClick={handleSpacesClick}>Clear ExtraSpaces</button>
      </div>
      <div className="container my-3" >
         <h2>Your text summary</h2>
         <p>{text.length>0?text.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(' ').length:0} words and {text.length} characters</p>
      </div>
      </>
  )
}
