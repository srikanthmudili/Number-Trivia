import React, { useState } from 'react';
import './App.css';
import Header from './header';
import'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import m from './numberfact.png';
import y from './yearfacts.png';
import d from './datefact.png'
import t from './trivia.png'
function App() {
  const [input, setInput] = useState();
  const [result,setResult] = useState();
  const [title,setTitle]=useState('Number Trivia')
  const [title1,setTitle1]=useState('Math Facts');
  const [title2,setTitle2]=useState('Date Facts');
  const [title3,setTitle3]=useState('Year Facts');
  const [label,setLabel]=useState('Give a number');
  const [label1,setLabel1]=useState('Give a number');
  const [label2,setLabel2]=useState('Give a date');
  const [label3,setLabel3]=useState('Give a year');
  const[image,setImage]=useState(t);
  const [img1,setImg1]=useState(m);
  const [img2,setImg2]=useState(d);
  const [img3,setImg3]=useState(y);
  const [place,setPlace]=useState('eg:55');
  const [place1,setPlace1]=useState('eg:55');
  const [place2,setPlace2]=useState('format:dd/mm');
  const [place3,setPlace3]=useState('eg:2000');
  const [b,setB]=useState('Number Trivia');
  const [b1,setB1]=useState('Math Facts');
  const [b2,setB2]=useState('Date Facts');
  const [b3,setB3]=useState('Year Facts');
  const [l,setL]=useState(0);
  const [l1,setL1]=useState(1);
  const [l2,setL2]=useState(2);
  const [l3,setL3]=useState(3)


 function route  (b)  {
   if(l===0){
     b='http://numbersapi.com/'+input;
   }
   else if(l===1){
     b='http://numbersapi.com/'+input+'/math';
   }
   else if(l===2){
     b='http://numbersapi.com/'+input+'/date';
   }
   else if(l===3){
     b='http://numbersapi.com/'+input+'/year'
   }
   if(input!==-1){
      Axios(b)
        .then(
          res => (
            console.log(res.data),
            setResult(res.data)
        ))
        .catch(function (error) {
          console.log(error);
        })
   }
  }
  function change(val=1){
   var tempTitle=title;
   var tempImg=image;
   var tempLabel=label;
   var tempBut=b;
   var tempPlace=place;
   var templ=l;
   if(val===1){
     setTitle(title1)
     setImage(img1)
     setLabel(label1)
     setPlace(place1)
     setB(b1)
     setL(l1)
     setTitle1(tempTitle)
     setImg1(tempImg)
     setLabel1(tempLabel)
     setPlace1(tempPlace)
     setB1(tempBut)
     setL1(templ)
   
   }
   else if(val===2){
    setTitle(title2)
    setImage(img2)
    setLabel(label2)
    setPlace(place2)
    setB(b2)
    setL(l2)
    setTitle2(tempTitle)
     setImg2(tempImg)
     setLabel2(tempLabel)
     setPlace2(tempPlace)
     setB2(tempBut)
     setL2(templ)
   
   }
   else if(val===3){
    setTitle(title3)
    setImage(img3)
    setLabel(label3)
    setPlace(place3)
    setB(b3)
    setL(l3)
    setTitle3(tempTitle)
     setImg3(tempImg)
     setLabel3(tempLabel)
     setPlace3(tempPlace)
     setB3(tempBut)
     setL3(templ)
   
   }
  }
  return (
  <div className='App col'>
    <div className="Ap">
        <Header className='' name={title} />
        <br></br>
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className='col-xs-1'>
              <label id='label'>{label}</label>
              <form>
              <input  id='input'className="form-control input-group-lg col-xs-1" type='text' value={input} onChange={(event) => (
        setInput(event.target.value))}placeholder={place}>
              </input>
              </form>
            </div>
            <br/>
            <button id='button' className="btn btn-info" onClick={()=>route()}>submit</button>
              <div className='result'>
                {result}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='c'>
          <div className="row">
          <div id='c1' className="card col-sm-4">
          <div className="container">
              <img id='i' src={img1} alt="Avatar"/>
              <div className='container'>
                    <button  id='button' onClick={()=>change(1)} className="btn btn-info">{b1}</button>
              </div>
              </div>
          </div>
          <div id='c2' className="card col-sm-4">
          <div className="container">
              <img id='i' src={img2} alt="Avatar"/>
              <div className='container'>
              <button id='button' onClick={()=>change(2)} className="btn btn-info" >{b2}</button>
              </div>
              </div>
          </div>
          <div id='c3' className="card col-sm-4">
              <div className="container">
              <img id='i' src={img3} alt="Avatar"/>
              <div className='container'>
              <button id='button' onClick={()=>change(3)} className="btn btn-info">{b3}</button>
              </div>
              </div>
          </div>
          </div>
          </div>
      </div>
  );
}


export default App;
