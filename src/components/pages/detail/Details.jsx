
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../../contex/AuthContex';
import axios from 'axios';

export default function CollapsibleTable() {
  const [user, setUser] = useState()
   
    let{userid}= useParams()
    useEffect(() => {
      async function fetchUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        const data = await response.json()
        // console.log(data, data.id, data.name, data.email)
        setUser(data)
      }
      fetchUser()
    }, [userid])
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    

    console.log(setUser)
    console.log(userid)
 
    return (     
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefono&nbsp;</TableCell>
            <TableCell align="right">Website&nbsp;</TableCell>
            <TableCell align="right">Direccion&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
            <TableCell />
         
            
            <TableCell>{user.name}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.phone}</TableCell>
            <TableCell align="right">{user.website}</TableCell>
            <TableCell align="right">{user.address.street} {user.address.suite}&nbsp;</TableCell>
         
         
         
          </TableRow>
        <TableBody>
          

        </TableBody>
      </Table>
    </TableContainer>
  );
}
