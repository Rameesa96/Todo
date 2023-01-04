import React ,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import DialogContent from '@mui/material/DialogContent';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';  
import DeleteIcon from '@mui/icons-material/Delete';
import './todo.css'
import Addtask from './Addtask';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1e90ff',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
  


export default function Todolist() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
 
    const [data ,setData]=useState('')

    React.useEffect(()=>{
    axios.get('http://localhost:5000/task/getall').then(response=>{
        setData(response.data)
    })
    },[])
    console.log(data)

  return (
    <section>
    <div className='container'>
        <h1>Task Board</h1>
        <div className='addbutton'>
        <button class="uk-button uk-button-primary button " onClick={handleClickOpen}>Add Task</button>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Task</StyledTableCell>
            <StyledTableCell align="right">Priority</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
           
            <StyledTableCell align="right">View</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(data).map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Priority}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right"><RemoveRedEyeIcon/></StyledTableCell>
              <StyledTableCell align="right"><DeleteIcon/></StyledTableCell>
    
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         
         Add Task
        </BootstrapDialogTitle>
        <DialogContent dividers>
       <Addtask/>
        </DialogContent>
        
      </BootstrapDialog> 
    </section>
  );
}