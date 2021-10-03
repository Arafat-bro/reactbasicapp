import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        city: '',
        phone: '',
        msg:''
    });

    const inputChange = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,   //if name matches then catch and put the value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${data.fullname}! You are from : ${data.city}. Contact no. : ${data.phone} and your message is : ${data.msg} `);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                          <div >
                            <label for="validationCustom01" className="form-label">Full name</label>
                                <input type="text" className="form-control" name="fullname" value={ data.fullname} onChange={inputChange} required />
                            
                          </div>
                          
                          <div>
                            <label for="validationCustom03" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={data.city} onChange={inputChange} required />
                            
                            </div>
                            
                          <div>
                            <label for="validationCustom05" className="form-label">Phone number</label>
                                <input type="telephone" className="form-control" name="phone" value={data.phone} onChange={inputChange} required />
                            
                          </div>
                          <div >
                            <label for="validationCustom05" className="form-label">Message</label>
                                <textarea className="form-control mb-2" name="msg" value={data.msg} onChange={inputChange} required />
                    
                          </div>
                          <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact;