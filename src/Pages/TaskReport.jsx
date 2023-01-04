import React ,{useState} from 'react'

import axios from 'axios' 
import Dropdown from 'react-bootstrap/Dropdown';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';  
import { Card } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


function TaskReport() {


    const [credentials, setCredentials] = useState({
      name: undefined,
      country:undefined,
      Status:undefined,
              contact:undefined,
              email:undefined,
              Address:undefined,
              contactperson: undefined,
              Whatsppnumber:undefined,
              city:undefined,
              state:undefined
        });
const navigate = useNavigate()
 const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
   
const handleClick = async (e) => {
           
        e.preventDefault();
        const data = await axios.post("http://localhost:5000/customer/postcustomer", credentials);
        
        navigate(`/customerdetails/${data.data._id}`)
    }


  return (
    <section className='customerform'>
        
        <div className='carddiv'>
        <h1>Task Report</h1>
      <Card className='container'>
    
    {/* <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
            
            </div>
        </div>
    </div> */}
   <div class="uk-card-body">
   <div className='customersform1'>
       
       <div className="form-group">
         <p required className='form-label field'>Name</p>
         <input className="form-control"  type="text"   id="Address" onChange={handleChange}/>
       </div>
     </div>
     <div className='customersform1'>
       
       <div className="form-group">
         <p required className='form-label field'>End Date</p>
         <input className="form-control"  type="text"   id="Address" onChange={handleChange}/>
       </div>
     </div>
     <div className='customersform'>
      
        
        <div className="form-group">
        <p required className='form-label field'>Status <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Status" onChange={handleChange}  type="text" >
          
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
            
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Priority <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contact" onChange={handleChange}  type="Number" />
        </div>
      
        
        
      </div> 
   


      
     </div>
     
     
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>submit</button>
    </div>
      
 
    
   
     </div>
    
</Card>
</div></section>
  );
}

export default TaskReport