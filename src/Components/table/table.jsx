import React, { useState } from 'react';
import './table.css'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LuListFilter } from "react-icons/lu";
import { Select, MenuItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const rows = [
  {
  "organization_name": "Innovative Solutions",
  "username": "olivia.garcia_88",
  "email": "olivia.garcia@innovativesolutions.io",
  "phone_number": "+1 (212) 555-0123",
  "date_joined": "2023-05-18",
  "status": "active"
},
{
  "organization_name": "Green Earth Collective",
  "username": "charles.martin_42",
  "email": "charles.martin@greeneartcollective.org",
  "phone_number": "+44 (20) 7946 1234",
  "date_joined": "2024-01-12",
  "status": "pending"
},
{
  "organization_name": "Technovation Labs",
  "username": "emma.williams_71",
  "email": "emma.williams@technovationlabs.com",
  "phone_number": "+61 (2) 8088 5555",
  "date_joined": "2023-11-07",
  "status": "active"
},
{
  "organization_name": "Global Consulting Group",
  "username": "noah.miller_09",
  "email": "noah.miller@globalconsultinggroup.net",
  "phone_number": "+86 (10) 8888 1212",
  "date_joined": "2023-08-29",
  "status": "inactive"
},
{
  "organization_name": "Creative Minds Design",
  "username": "ava.jackson_35",
  "email": "ava.jackson@creativesmindsdesign.co",
  "phone_number": "+55 (11) 9999 0000",
  "date_joined": "2022-12-21",
  "status": "active"
},
{
  "organization_name": "Health & Wellness Center",
  "username": "william.davis_16",
  "email": "william.davis@healthwellnesscenter.info",
  "phone_number": "+91 (80) 2222 3333",
  "date_joined": "2023-07-14",
  "status": "active"
},
{
  "organization_name": "Learning Hub Institute",
  "username": "sophia.taylor_24",
  "email": "sophia.taylor@learninghubinstitute.edu",
  "phone_number": "+33 (1) 4567 8901",
  "date_joined": "2024-02-09",
  "status": "pending"
},
{
  "organization_name": "Eco Solutions",
  "username": "liam.walker_93",
  "email": "liam.walker@ecosolutions.biz",
  "phone_number": "+49 (30) 1234 5678",
  "date_joined": "2023-03-03",
  "status": "active"
},
{
  "organization_name": "Marketing Strategies Group",
  "username": "mia.anderson_57",
  "email": "mia.anderson@marketingstrategiesgroup.ca",
  "phone_number": "+7 (495) 555 9999",
  "date_joined": "2023-09-22",
  "status": "inactive"
},
{
  "organization_name": "Financial Services Inc.",
  "username": "ethan.clark_65",
  "email": "ethan.clark@financialservicesinc.us",
  "phone_number": "+52 (55) 1111 2222",
  "date_joined": "2024-01-26",
  "status": "pending"
}
]; 

const TableFooter = ({ rowCount, rowsPerPage, onRowsPerPageChange }) => {
  const handleRowsPerPageChange = (event) => {
    onRowsPerPageChange(event.target.value);
  };

  return (
    <div className='footer'>
      <div className='shw'>
        Showing
      </div>
      <div>
        <Select className='drpDown'
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          style={{ background: "#213F7D1A", color: "black" }}
        >
          <MenuItem value={rowCount}>100</MenuItem>
          {/* <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem> */}
        </Select>
        <div className='numbr'>out of {100}</div> 
      </div>
    </div>
  );
};

const UserTable = () => { 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0); // Reset to the first page
  };
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'>
            <span>ORGANIZATION</span>
            <LuListFilter className='filtericon'/>
            </TableCell> 
            <TableCell className='tablecell'>
            <span>USERNAME</span>
            <LuListFilter className='filtericon'/>
            </TableCell>
            <TableCell className='tablecel'>
            <span>EMAIL</span>
            <LuListFilter className='filtericon'/>
            </TableCell>
            <TableCell className='tablecell'>
            <span>PHONE NUMBER</span>
            <LuListFilter className='filtericon'/>
            </TableCell>
            <TableCell className='tablecell'>
            <span>DATE JOINED</span>
            <LuListFilter className='filtericon'/>
            </TableCell>
            <TableCell className='tablecell'>
            <span>STATUS</span>
            <LuListFilter className='filtericon'/>
            </TableCell>
            {/* Add more TableCell elements for other properties */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
            .map((row) => (
              <TableRow key={row.username} >
                <TableCell className='tablecell'>{row.organization_name}</TableCell>
                <TableCell className='tablecell'>{row.username}</TableCell>
                <TableCell className='tablecell'>{row.email}</TableCell>
                <TableCell className='tablecell'>{row.phone_number}</TableCell>
                <TableCell className='tablecell'>{row.date_joined}</TableCell>
                <TableCell className='tablecell'>{row.status}</TableCell>
                {/* Add more TableCell elements to render other properties */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TableFooter
        rowCount={rows.length}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange} 
      />
      <Pagination
        className='pagination' 
        count={Math.ceil(rows.length / rowsPerPage)}
        page={page}
        onChange={page} 
      />
    </TableContainer>
  );
};

export default UserTable; 
