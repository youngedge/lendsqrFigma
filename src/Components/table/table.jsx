import './table.css'; // importing the table css file
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LuListFilter } from "react-icons/lu"; // importing LuListFilter icon from react-icons
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"; // importing PiDotsThreeOutlineVerticalFill icon from react-icons
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Data from '../../Components/table/Data.json'; // importing data from local json file
import { Select, MenuItem, Popover } from '@mui/material';
import { TbUserCheck } from "react-icons/tb";
import { TbUserX } from "react-icons/tb";
import { PiEye } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';


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
                <div className='numbr'>out of {10}</div>
            </div>
        </div>
    );
};



// defining the List component
const List = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event, index) => {
        setAnchorEl({ target: event.currentTarget, rowIndex: index });
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl); // State to control dropdown visibility
    const id = open ? 'simple-popover' : undefined;

    const navigate = useNavigate();
    const handleClick = () => { navigate("../../User") }


    const handleRowsPerPageChange = (event, newPage) => {
        setPage(newPage - 1);
        setRowsPerPage(event.target.value);
        // setPage(0); // Reset to the first page
    };
    const [anchorEl1, setAnchorEl1] = useState(null);
    const handleMenuOpen1 = (event, index) => {
        setAnchorEl1({ target: event.currentTarget, rowIndex: index });
    };
    const handleMenuClose1 = () => {
        setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1); // State to control dropdown visibility for the filtering
    const id1 = open1 ? 'simple-popover' : undefined;
    // rendering the component
    return (
        <div>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell className="tablecell">
                                <span> ORGANIZATION </span>
                                <LuListFilter className="filtericon"
                                />
                            </TableCell> */}
                            <TableCell className="tablecell"> 
                                <span> ORGANIZATION </span>
                                <LuListFilter className="filtericon"
                                    onClick={(event) => handleMenuOpen1(event)}
                                />
                                <Popover
                                    id={id1}
                                    open={open1}
                                    anchorEl={anchorEl1 ? anchorEl1.target : null}
                                    onClose={handleMenuClose1}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <MenuItem>
                                        <form action="" class="filter">
                                            <div class="filter-row">
                                                <label for="organization_filter">Organization</label>
                                                <input type="text" name="organization_filter" className="filter-input" />
                                            </div>
                                            <div class="filter-row">
                                                <label for="username_filter">Username</label>
                                                <input type="text" name="username_filter" className="filter-input" />
                                            </div>
                                            <div class="filter-row">
                                                <label for="email_filter">Email</label>
                                                <input type="email" name="email_filter" className="filter-input" />
                                            </div>
                                            <div class="filter-row">
                                                <label for="date_filter">Date</label>
                                                <input type="date" name="date_filter" className="filter-input" />
                                            </div>
                                            <div class="filter-row">
                                                <label for="number_filter">Phone Number</label>
                                                <input type="number" name="number_filter" className="filter-input" />
                                            </div>
                                            <div class="filter-row">
                                                <label for="status_filter">Status</label>
                                                <select name="status_filter" className="filter-select">
                                                    <option placeholder="" ></option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="blacklisted">Blacklisted</option>
                                                </select>
                                            </div>
                                            <div >
                                                <button type="submit" class="reset-btn">Reset</button>
                                                <button type="submit" class="filter-btn">Filter</button>
                                            </div>
                                        </form>
                                    </MenuItem>
                                </Popover>
                            </TableCell>
                            <TableCell className="tablecell">
                                <span> USERNAME </span>
                                <LuListFilter className="filtericon" 
                                    onClick={(event) => handleMenuOpen1(event)}
                                />
                            </TableCell>
                            <TableCell className="tablecell">
                                <span> EMAIL </span>
                                <LuListFilter className="filtericon" 
                                onClick={(event) => handleMenuOpen1(event)}
                                />
                            </TableCell>
                            <TableCell className="tablecell">
                                <span> PHONE NUMBER </span>
                                <LuListFilter className="filtericon" 
                                onClick={(event) => handleMenuOpen1(event)}
                                />
                            </TableCell>
                            <TableCell className="tablecell">
                                <span> DATE JOINED </span>
                                <LuListFilter className="filtericon" 
                                onClick={(event) => handleMenuOpen1(event)}
                                />
                            </TableCell>
                            <TableCell className="tablecell">
                                <span> STATUS </span>
                                <LuListFilter className="filtericon" 
                                onClick={(event) => handleMenuOpen1(event)}
                                />
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {Data.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((d, i) => (
                            <TableRow
                                key={i}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell className="tablecell">
                                    {d.organization_name}
                                </TableCell>
                                <TableCell className="tablecell">{d.username}</TableCell>
                                <TableCell className="tablecell">{d.email}</TableCell>
                                <TableCell className="tablecell">{d.phone_number}</TableCell>
                                <TableCell className="tablecell">{d.date_joined}</TableCell>
                                <TableCell className="tablecell">
                                    <span className={`status ${d.status.toLowerCase()}`}> {d.status} </span>
                                </TableCell>
                                <TableCell className="dropDown">
                                    {d.icon && (
                                        <> {/* Wrap in a fragment to avoid extra DOM elements */}
                                            <PiDotsThreeOutlineVerticalFill
                                                onClick={(event) => handleMenuOpen(event, i)}
                                            />
                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl ? anchorEl.target : null}
                                                onClose={handleMenuClose}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                            >
                                                <MenuItem  onClick={handleClick}>
                                                    <PiEye />
                                                    <span>View Details</span>
                                                </MenuItem>
                                                <MenuItem onClick={handleMenuClose}>
                                                    <TbUserX />
                                                    <span>Blacklist User</span>
                                                </MenuItem>
                                                <MenuItem onClick={handleMenuClose}>
                                                    <TbUserCheck />
                                                    <span> Activate User </span>
                                                </MenuItem>
                                            </Popover>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <TableFooter
                    rowCount={Data.length}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />

                {/* PAGINATION CODE */}
                <Pagination
                    className="pagination"
                    count={Math.ceil(Data.length + rowsPerPage)}
                    page={page + 1} // Adjust for 1-based indexing
                //  onChange={handleChangePage}
                />

            </TableContainer>
        </div>
    );
}

// exporting the List component
export default List;