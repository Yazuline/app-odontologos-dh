
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useParams } from 'react-router-dom';
import Home from '../home/Home';




export default function CollapsibleTable() {
  
  let{userid}= useParams()
 // let userSelected = user.find(user=> user.id ===userid)
 
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
            <TableCell>name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefono&nbsp;</TableCell>
            <TableCell align="right">Website&nbsp;</TableCell>
            <TableCell align="right">Direccion&nbsp;</TableCell>
          </TableRow>
        <TableBody>
          

        </TableBody>
      </Table>
    </TableContainer>
  );
}