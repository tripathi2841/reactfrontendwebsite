import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fname : "",
        email : "",
        msg : "",
        address : "",
        phone : ""
        
    });
    const AddItem = (event)=>{
          const {name,value} = event.target;
          setData((preVal)=>{
              return{
                  ...preVal,
                  [name]:value,
              };
          });
    };
    const submitFun = (e)=>{
        e.preventDefault();
        alert(`My name is ${data.fname} . My email is ${data.email}. My address is ${data.address}. My mobile number is ${data.phone}. The message is ${data.msg}`);
        setData(()=>{
            return{};
        });
    };
    return (
        <>
            <h1 className="mt-3 mb-4 text-center" style={{ color: "green" }}>Registration Form </h1>
            <div className="main_contact mb-4">
                <form onSubmit={submitFun}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name = "email" value = {data.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={AddItem}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name = "fname" value = {data.fname} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={AddItem}/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"> Address</label>
                        <input type="text" name = "address" value = {data.address} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={AddItem} />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                        <input type="number" name = "phone" value = {data.phone} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={AddItem}/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
                        <textarea class="form-control" name = "msg" value = {data.msg} id="exampleFormControlTextarea1" rows="3" onChange={AddItem}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </>
    );
}
export default Contact;