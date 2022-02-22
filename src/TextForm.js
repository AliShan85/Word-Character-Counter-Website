import React, {useState} from 'react'

const TextAreaComp = (props) => {

    function UpperCase() {
       var newtext=text.toUpperCase();
       settext(newtext);
    }
    const  Lowercase= () => {
        var newtext=text.toLowerCase();
        settext(newtext);
    } 
    const handleonchange  = (event) => {
        settext(event.target.value);
    }
    // const  handleonkeypress= (event) => {


    // }
    const Copytext=() =>{
        navigator.clipboard.writeText(text);
    }
    const Removetext= () => {
        settext('');
    }
    const RemoveExtraSpaces=() =>{
          var newtext;
        newtext=text.replace(/\s\s+/g, ' ');
        settext(newtext);
    }

    const [text,settext]= useState('');
    return (  

        <>
            <div className="mb-3">
            <h1 className="my-5" style={{color:props.mode==='light'?'black':'white'}}>Write the Text here...</h1>
            <textarea className={`form-control bg-${props.mode==='dark'?'dark':'light'}`} style={{color:props.mode==='light'?'black':'white'}} value={text} onChange={handleonchange}  id="exampleFormControlTextarea1" placeholder='Write here' rows="10"></textarea>
            </div>
            <button type="button" onClick={UpperCase}  className="btn btn-primary">To Upper Case</button>
            <button type="button" onClick={Lowercase}  className="btn btn-primary mx-4 my-md-3 my-sm-3 my-3">To Lower Case</button>
            <button type="button" onClick={RemoveExtraSpaces}  className="btn btn-primary">Remove Extra Spaces</button>
            <button type="button" onClick={Removetext}  className="btn btn-primary mx-4">Clear All</button>
            <button type="button" onClick={Copytext}  className="btn btn-primary mx-4 my-md-3 my-sm-3 my-3">Copy The Text</button>
            <div style={{color:props.mode==='light'?'black':'white'}}>
            <h2 className="my-4 text-right">Text summary</h2>
            <p>Characters (Including Spaces) {(text.length)}</p>
            <p>Characters (without Spaces) {((1+text.length)-text.split(' ').length)}</p>
            <p>Tottal word is {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
            <p>Tottal Paragraph is {(text.split('.').length-1)}</p>
            <h1>Review</h1>
            <p>{text}</p>
            </div>
        </>
    );
}
 
export default TextAreaComp;