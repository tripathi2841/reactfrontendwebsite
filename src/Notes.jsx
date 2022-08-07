// import React, { useState } from "react";
// import "./index.css";
// import AddIcon from "@material-ui/icons/Add";
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// import Clock from "react-digital-clock";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// const Appp = ()=>{
//     const [item ,setItem] = useState(0);
//     const Incfun = ()=>{
//         setItem(item+1);
//     }
//     const Decfun= ()=>{
//        if(item > 0)
//        {
//         setItem(item-1);
//        }
//        else{
//            alert("Minimun limit reached !")
//            setItem(0);
//        }
//     }
//     return(
//         <>
//             <div className="main-div">
//                 <h1>{item}</h1>
//                 <div className="center-div">
//                 <Tooltip title = "Add">
//                 <Button onClick={Incfun}><AddIcon/></Button></Tooltip>
//                 <Tooltip title = "Delete">
//                 <Button onClick={Decfun}><DeleteIcon/></Button>
//                 </Tooltip>
//                 </div>
//                 <Clock/>
//                 <button className="btn btn-success">Thapa Technical</button>
//             </div>
//         </>
//     );
// }
// export default Appp;

//************************************ */

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// const Appp = () => {
//     return (
//         <>
//         <h1 className="text-center text-danger my-5 text-capitalize">Welcome to my Channel</h1>
//             <div class="container">
//                 <div class="row">
//                     <div className="col">
//                         <div class="card">
//                             <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height = "200px"/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div class="card">
//                             <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height = "200px"/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div class="card">
//                             <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height = "200px"/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }
// export default Appp;

//  ********************************

// import React, { createContext } from "react";
// import ComA from "./ComA";
// const FirstName  = createContext();
// const LastName  = createContext();
// const Appp = () => {

//     return (
//         <>
//             <FirstName.Provider value={"Harsh"}>
//             <LastName.Provider value={"Tripathi"}>
//                 <ComA />
//             </LastName.Provider>
//             </FirstName.Provider>
//         </>
//     );
// }
// export default Appp;
// export {FirstName ,LastName};

// *******************************

// import React, {useEffect, useState } from "react";
// import ComA from "./ComA";

// const Appp = () => {

//     const [count,setCount] = useState(0);
//     useEffect(()=>{
//         document.title = `You clicked me ${count} times`;
//     })
//     const IncNum = ()=>{
//     setCount(count+1);
// }
//     return (
//         <>
//         <button onClick={IncNum}>Click Me {count}</button>
//         </>
//     );
// }
// export default Appp;


//*************************************** */
// import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// const Appp = () => {
//     const [data,setData] = useState([]);
//    const getCoviddata = async()=>{
//        const res= await fetch("https://api.covid19india.org/data.json");
//        const actualData = res.json();
//        console.log(actualData);
//         // setData(actualData.statewise);
//    }
//    useEffect(()=>{
//         getCoviddata();
//    },[]);
//     return (
//         <>
//         <div className="container-fluid mt-5">
//             <div className="main-heading">
//                 <h1 className="mb-5 text-center"><span className="font-weight-bold">India</span> Covid 19 Dashboard</h1>
//             </div>
//             <div className="table-responsive">
//                 <table className="table table-hover">
//                     <thead className="thead-dark"> 
//                         <tr>
//                             <th>State</th>
//                             <th>State</th>
//                             <th>State</th>
//                             <th>State</th>
//                             <th>State</th>
//                             <th>State</th>
//                         </tr>
//                     </thead>
//                 </table>
//             </div>
//         </div>
//         </>
//     );
// }
// export default Appp;

//*********************************** */

// import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import axios from "axios";
// const Appp = () => {
//   const [num,setNum] = useState();
//   const [name,setName] = useState();
//   const [move,setMove] = useState();
//   useEffect(()=>{
//       async function getData (){
//           const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//           console.log(res);
//          setName(res.data.name);
//          setMove(res.data.moves.length);
//       }
//       getData();
//   })
//     return (
//         <>
//         <h1>You select the number {num}</h1>
//         <h1>You select the number {name}</h1>
//         <h1>You select the number {move}</h1>
//            <select value = {num} onChange={(event)=>{
//                setNum(event.target.value);
//            }}>
//                <option value="1">1</option>
//                <option value="25">25</option>
//                <option value="3">3</option>
//                <option value="4">4</option>
//                <option value="5">5</option>
//            </select>
//         </>
//     );
// }
// export default Appp;

