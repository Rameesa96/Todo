import React ,{useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios' 
import Dropdown from 'react-bootstrap/Dropdown';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Navigate, useNavigate } from 'react-router-dom';
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
import { useLocation } from 'react-router-dom';
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
    const location =useLocation()
    
    const taskid = location.pathname.split("/")[2]

    const [credentials, setCredentials] = useState({
      Name: undefined,
      Priority:undefined,
      Status:undefined,
    Enddate:undefined,
         
        });

 const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
   
const handleClick = async (e) => {
           
        e.preventDefault();
        const data = await axios.put(`http://localhost:5000/task/edit/${taskid}`, credentials);
        
        
    }

    const [data ,setData]=useState('')
    
    React.useEffect(()=>{
    axios.get(`http://localhost:5000/task/${taskid}`).then(response=>{
        setData(response.data)
    })
    })
  
  return (
    <section className='customerform'>
        
        <div className='carddiv'>
        
      <Card className='container'>
    
    {/* <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
            
            </div>
        </div>
    </div> */}
   
   <div class="uk-card-body">
   
   <div className='customersform3'>
   
       <div className="form-group">
         <p required className='form-label field'>Name</p>
         <input className="form-control"  type="text"  defaultValue={data.Name} id="Name" onChange={handleChange}/>
       </div>
     </div>
     <div className='customersform1'>
       
       <div className="form-group">
         <p required className='form-label field'>End Date</p>
         <input className="form-control"  type="text"   id="Enddate" value={new Date(data.Enddate).toDateString()} onChange={handleChange}/>
       </div>
     </div>
     <div className='customersform'>
      
        
        <div className="form-group">
        <p required className='form-label field'>Status </p>
      <div className='forms'><input className="form-control"  type="text"   id="Enddate" value={data.Status} onChange={handleChange}/>
          <select className="form-select"  id="Status" onChange={handleChange}  type="text" >
          
            <option value=""><ArrowDropDownIcon/></option>
            <option value="Started">Started</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
            
          </select></div>  
        </div>
       
        <div className="form-group">
      <p required className='form-label field'>Priority</p>
      <div className='forms'><input className="form-control"  type="text"   id="Enddate" defaultValue={data.Priority} onChange={handleChange}/>
          <select className="form-select"  id="Priority"  onChange={handleChange}  type="Number" >
          
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>  </div>
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