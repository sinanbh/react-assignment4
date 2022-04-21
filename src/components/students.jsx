import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './student.css'

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData('John', 26, 'MERN', 'October', 'Edit'),
  createData('Doe', 23, 'MERN', 'November', 'Edit'),
  createData('Biden', 26, 'MERN', 'September', 'Edit'),
  createData('Dave', 20, 'MERN', 'September', 'Edit'),
  createData('Chris', 21, 'MERN', 'October', 'Edit'),
  createData('James', 22, 'MERN', 'November', 'Edit'),
  createData('Ryan', 24, 'MERN', 'October', 'Edit'),
];

export default function Students() {
  return (
    <div className='conatainer'>
    <div className='heading'>
      <h1>Students Details</h1>
      <button>Add new student</button>
    </div>
    <TableContainer component={Paper} className="table-conatiner">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Cahnge</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
