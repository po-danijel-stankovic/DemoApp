import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function App() {
  // function createData(
  //   po: string,
  //   oe: string,
  //   dateCreated: string,
  //   createdTime: string,
  //   createdBy: string,
  //   customerNo: string,
  //   customerName: string,
  //   customerPO: string,
  //   product: string
  // ) {
  //   return { po, oe, dateCreated, createdBy, createdTime, customerNo, customerName, customerPO, product };
  // }
  
  // const rows = [
  //   createData('2754057', '8308390', '11/15/2024', 'Vladica', '08:48 AM ET', '3000765', 'Schernecker', 'TURTORA', 'Provia'),
  //   createData('2754058', '83012330', '11/14/2024', 'Jeff', '08:48 PM ET', '250520765', 'Marshall BLDG', 'CAROL', 'Harvey'),
  //   createData('2754053', '8654390', '11/15/2024', 'Lauren', '01:30 PM ET', '100000765', 'Southend Exteriors', '4 eSTHER', 'Harvey'),
  //   createData('2754052', '8302290', '11/13/2024', 'Danijel', '11:18 AM ET', '1064950', 'J & D Builders', 'TURTORA', 'Provia'),
  //   createData('2754051', '2228390', '11/15/2024', 'Greg', '09:48 AM ET', '3000765', 'Exteriors LLC', 'Gruenwald', 'Harvey'),
  // ];

  const rows = [
    { id: 1, PO: '2754057', OE: '8308390', DateCreated: '11/15/2024', CreatedTime: '08:48 AM ET',  CreatedBy: 'Christopher', CustomerNo: '100012732', CustomerName: 'Brennan', CustomerPO: 'TURTORA', Product: 'Provia' },
    { id: 2, PO: '2754056', OE: '8308391', DateCreated: '11/15/2024', CreatedTime: '08:48 AM ET',  CreatedBy: 'Geoffrey', CustomerNo: '1004042', CustomerName: 'J & D Builders', CustomerPO: 'CAROL', Product: 'Harvey' },
    { id: 3, PO: '2754055', OE: '8308392', DateCreated: '11/15/2024', CreatedTime: '08:48 AM ET',  CreatedBy: 'Tom', CustomerNo: '1032578', CustomerName: 'Comfort Homes', CustomerPO: '4 Esther', Product: 'Harvey' },
    { id: 4, PO: '2754054', OE: '8308393', DateCreated: '11/15/2024', CreatedTime: '08:48 AM ET',  CreatedBy: 'Derek Pioli', CustomerNo: '11392578', CustomerName: 'Cope Cod', CustomerPO: 'Gruenwald', Product: 'Provia' },
    { id: 5, PO: '2754053', OE: '8308394', DateCreated: '11/15/2024', CreatedTime: '08:48 AM ET',  CreatedBy: 'Geoffrey', CustomerNo: '11392578', CustomerName: 'Exteriors LLC', CustomerPO: '4 Esther', Product: 'Harvey' },
  ];

  const columns = [
    {
      field: 'PO',
      headerName: 'PO#',
      flex: 1
    },
    {
      field: 'OE',
      headerName: 'OE#',
      flex: 1
    },
    {
      field: 'DateCreated',
      headerName: 'Date Created',
      flex: 1
    },
    {
      field: 'CreatedTime',
      headerName: 'Created Time',
      flex: 1
    },
    {
      field: 'CreatedBy',
      headerName: 'Created By',
      flex: 1
    },
    {
      field: 'CustomerNo',
      headerName: 'Customer No',
      flex: 1
    },
    {
      field: 'CustomerName',
      headerName: 'Customer Name',
      flex: 1
    },
    {
      field: 'CustomerPO',
      headerName: 'Customer PO',
      flex: 1
    },
    {
      field: 'Product',
      headerName: 'Product',
      flex: 1
    },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: () => (
        <div>
            <WorkIcon /> 
            <EventIcon /> 
            <DeleteIcon />
        </div>
      ),
    }
  ];

  return (
    <div style={{marginTop: 20}} className="App">

      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />

            <AccountCircle /> <span style={{marginLeft: 5}}>Seksi Zvercina</span>
            
          </Toolbar>
        </AppBar>
      </div>

      <Box display="flex" justifyContent="flex-end" marginTop={2} marginRight={2}>
        <HelpOutlineIcon />
      </Box>

      <div style={{ padding: '0 20px', textAlign: 'left' }}>
        <h2>Order Manager</h2>

        <h3>Filters</h3>

        <Grid container spacing={2}>
          {/* Row 1 */}
          <Grid item xs={4}>
              <Typography variant="h6">
              <TextField id="filled-number"
                  label="PO #"
                  type="text"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  fullWidth />
              </Typography>
          </Grid>
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="filled-number"
                  label="OE #"
                  type="text"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  fullWidth />
              </Typography>
          </Grid>
          <Grid item xs={4}>
              <Typography variant="h6">
              <TextField id="filled-number"
                  label="Customer Number"
                  type="text"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  fullWidth />
              </Typography>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="outlined-helperText"
                    label="Order Status"
                    defaultValue=""
                    placeholder="" 
                    fullWidth
                    InputLabelProps={{
                      shrink: true, // Keeps the label always visible at the top
                      style: { textAlign: 'left', right: 0, position: 'absolute', transformOrigin: 'top left' }, // Position label top right
                    }} 
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowDropDownIcon  />
                        </InputAdornment>
                      ),
                    }}
                  />
              </Typography>
          </Grid>
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="outlined-helperText"
                    label="Order Type"
                    defaultValue=""
                    placeholder="" 
                    fullWidth
                    InputLabelProps={{
                      shrink: true, // Keeps the label always visible at the top
                      style: { textAlign: 'left', right: 0, position: 'absolute', transformOrigin: 'top left' }, // Position label top right
                    }} 
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowDropDownIcon  />
                        </InputAdornment>
                      ),
                    }}
                  />
              </Typography>
          </Grid>
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="outlined-helperText"
                  label="Warehouse"
                  defaultValue=""
                  placeholder="" 
                  fullWidth
                  InputLabelProps={{
                    shrink: true, // Keeps the label always visible at the top
                    style: { textAlign: 'left', right: 0, position: 'absolute', transformOrigin: 'top left' }, // Position label top right
                  }} 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowDropDownIcon  />
                      </InputAdornment>
                    ),
                  }}
                />
              </Typography>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="outlined-helperText"
                    label="Invoiced Date"
                    defaultValue=""
                    placeholder="" 
                    fullWidth
                    InputLabelProps={{
                      shrink: true, // Keeps the label always visible at the top
                      style: { textAlign: 'left', right: 0, position: 'absolute', transformOrigin: 'top left' }, // Position label top right
                    }} 
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CalendarTodayIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
              </Typography>
          </Grid>
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="outlined-helperText"
                    label="Order Date From"
                    defaultValue=""
                    placeholder="" 
                    fullWidth
                    InputLabelProps={{
                      shrink: true, // Keeps the label always visible at the top
                      style: { textAlign: 'left', right: 0, position: 'absolute', transformOrigin: 'top left' }, // Position label top right
                    }} 
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CalendarTodayIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
              </Typography>
          </Grid>
          <Grid item xs={4}>
              <Typography variant="h6">
                <TextField id="outlined-helperText"
                  label="Order Date To"
                  defaultValue=""
                  placeholder="" 
                  fullWidth
                  InputLabelProps={{
                    shrink: true, // Keeps the label always visible at the top
                    style: { textAlign: 'left', right: 0, position: 'absolute', transformOrigin: 'top left' }, // Position label top right
                  }} 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarTodayIcon />
                      </InputAdornment>
                    ),
                  }}
                  />
              </Typography>
          </Grid>
        </Grid>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <Button variant="outlined" size="medium">Clear</Button>
        <Button variant="contained" size="medium" style={{ marginLeft: '8px' }}>Apply</Button>
        </div>
      </div>

      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
          <TextField id="outlined-helperText"
              label="Search"
              defaultValue=""
              placeholder="Name, email, etc..." />
        </div>
        <div style={{ marginTop: 10 }}>

          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 3,
                },
              },
            }}
            pageSizeOptions={[3, 5]}
            disableRowSelectionOnClick
            disableColumnSorting={true}
            disableColumnFilter={true}
            disableColumnResize={true}
            disableColumnMenu={true}
        />

          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">PO#</TableCell>
                  <TableCell align="left">OE#</TableCell>
                  <TableCell align="left">Date Created</TableCell>
                  <TableCell align="left">Created Time</TableCell>
                  <TableCell align="left">Created By</TableCell>
                  <TableCell align="left">Customer No</TableCell>
                  <TableCell align="left">Customer Name</TableCell>
                  <TableCell align="left">Customer PO</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.po}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.po}
                    </TableCell>
                    <TableCell align="left">{row.oe}</TableCell>
                    <TableCell align="left">{row.dateCreated}</TableCell>
                    <TableCell align="left">{row.createdBy}</TableCell>
                    <TableCell align="left">{row.createdTime}</TableCell>
                    <TableCell align="left">{row.customerNo}</TableCell>
                    <TableCell align="left">{row.customerName}</TableCell>
                    <TableCell align="left">{row.customerPO}</TableCell>
                    <TableCell align="left">{row.product}</TableCell>
                    <TableCell align="left">  
                        <WorkIcon /> 
                        <EventIcon /> 
                        <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </div>
      </div>
    </div>
  );
}

export default App;
