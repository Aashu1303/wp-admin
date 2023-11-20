import "./newSlot.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewSlot = () => {
  const [info,SetInfo]=useState({});
  const [hallId,SetHallId]=useState(undefined);
  const [slots,setSlots]=useState([]);

  const {data,loading,error}=useFetch("/halls");

  const handleChange=e=>{
    SetInfo((prev)=>({...prev,[e.target.id]:e.target.value}));
  }

  const handleClick= async e=>{
    e.preventDefault()
    const slotNumbers=slots.split(",").map((slot)=>({number:slot}))
    try{
      await axios.post(`/slots/${hallId}`,{...info,slotNumbers})

    }catch(err){}
    }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top"> 
          <h1>Add New Slots</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>


              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange}/>
                </div>
              ))}
              <div className="formInput">
                  <label>Slots</label>
                  <textarea onChange={e=>setSlots(e.target.value)} placeholder="give comma between slots (ex:morning,afternoon..)"/>
                </div>
              <div className="formInput" >
                  <label>Choose a Hall</label>
                  <select id="hallId" onChange={e=>SetHallId(e.target.value)}>
                    {loading?"loading":data&&data.map(hall=>(
                      <option key={hall._id} value={hall._id}>{hall.name}</option>
                    ))}

                  </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlot;
