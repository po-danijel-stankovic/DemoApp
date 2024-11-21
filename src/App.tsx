import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  SelectChangeEvent 
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { log } from "console";
import { DesktopDatePicker } from "@mui/x-date-pickers-pro";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function App() {
  const [warehouse, setWarehouse] = useState("All");

  const handleWarehouseChange = (event: SelectChangeEvent<string>) => {
    setWarehouse(event.target.value);
  };

  const [orderStatus, setOrderStatus] = useState("Quoted");

  const handleOrderStatusChange = (event: SelectChangeEvent<string>) => {
    setOrderStatus(event.target.value);
  };

  const [orderType, setOrderType] = useState("Quote"); 

  const handleOrderTypeChange = (event: SelectChangeEvent<string>) => {
    setOrderType(event.target.value);
  };

  const rows = [
    {
      id: 1,
      PO: "2754057",
      OE: "8308390",
      DateCreated: "11/15/2024",
      CreatedTime: "08:48 AM ET",
      CreatedBy: "Christopher",
      CustomerNo: "100012732",
      CustomerName: "Brennan",
      CustomerPO: "TURTORA",
      Product: "Provia",
    },
    {
      id: 2,
      PO: "2754056",
      OE: "8308391",
      DateCreated: "11/15/2024",
      CreatedTime: "08:48 AM ET",
      CreatedBy: "Geoffrey",
      CustomerNo: "1004042",
      CustomerName: "J & D Builders",
      CustomerPO: "CAROL",
      Product: "Harvey",
    },
    {
      id: 3,
      PO: "2754055",
      OE: "8308392",
      DateCreated: "11/15/2024",
      CreatedTime: "08:48 AM ET",
      CreatedBy: "Tom",
      CustomerNo: "1032578",
      CustomerName: "Comfort Homes",
      CustomerPO: "4 Esther",
      Product: "Harvey",
    },
    {
      id: 4,
      PO: "2754054",
      OE: "8308393",
      DateCreated: "11/15/2024",
      CreatedTime: "08:48 AM ET",
      CreatedBy: "Derek Pioli",
      CustomerNo: "11392578",
      CustomerName: "Cope Cod",
      CustomerPO: "Gruenwald",
      Product: "Provia",
    },
    {
      id: 5,
      PO: "2754053",
      OE: "8308394",
      DateCreated: "11/15/2024",
      CreatedTime: "08:48 AM ET",
      CreatedBy: "Geoffrey",
      CustomerNo: "11392578",
      CustomerName: "Exteriors LLC",
      CustomerPO: "4 Esther",
      Product: "Harvey",
    },
  ];

  const columns = [
    {
      field: "PO",
      headerName: "PO#",
      flex: 1,
    },
    {
      field: "OE",
      headerName: "OE#",
      flex: 1,
    },
    {
      field: "DateCreated",
      headerName: "Date Created",
      flex: 1,
    },
    {
      field: "CreatedTime",
      headerName: "Created Time",
      flex: 1,
    },
    {
      field: "CreatedBy",
      headerName: "Created By",
      flex: 1,
    },
    {
      field: "CustomerNo",
      headerName: "Customer No",
      flex: 1,
    },
    {
      field: "CustomerName",
      headerName: "Customer Name",
      flex: 1,
    },
    {
      field: "CustomerPO",
      headerName: "Customer PO",
      flex: 1,
    },
    {
      field: "Product",
      headerName: "Product",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      renderCell: () => (
        <div>
          <WorkIcon />
          <EventIcon />
          <DeleteIcon />
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <div>
        <AppBar position="static" color="primary">
          <Paper>
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
              <AccountCircle /> <span style={{ marginLeft: 5 }}>John Doe</span>
            </Toolbar>
          </Paper>
        </AppBar>
      </div>

      <Box
        display="flex"
        justifyContent="flex-end"
        marginTop={2}
        marginRight={2}
      >
        <Tooltip title="need help?" placement="left-start" arrow>
          <HelpOutlineIcon />
        </Tooltip>
      </Box>

      <div style={{ padding: "0 20px", textAlign: "left" }}>
        <h2>Order Manager</h2>

        <h3>Filters</h3>

        <Grid container spacing={2}>
          {/* Row 1 */}
          <Grid item xs={4}>
            <Typography variant="h6">
              <TextField
                id="filled-number"
                label="PO #"
                type="text"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                fullWidth
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <TextField
                id="filled-number"
                label="OE #"
                type="text"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                fullWidth
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <TextField
                id="filled-number"
                label="Customer Number"
                type="text"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                fullWidth
              />
            </Typography>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={4}>
            <Typography variant="h6">
              <Select
                id="order-status-select"
                value={orderStatus}
                onChange={handleOrderStatusChange}
                fullWidth
                displayEmpty
                inputProps={{ "aria-label": "Select Order Status" }}
              >
                <MenuItem value="Quoted">Quoted</MenuItem>
                <MenuItem value="Ordered">Ordered</MenuItem>
                <MenuItem value="Shipped">Shipped</MenuItem>
              </Select>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <Select
                id="order-type-select"
                value={orderType}
                onChange={handleOrderTypeChange}
                fullWidth
                displayEmpty
                inputProps={{ "aria-label": "Select Order Type" }}
              >
                <MenuItem value="Quote">Quote</MenuItem>
                <MenuItem value="Stocked Order">Stocked Order</MenuItem>
                <MenuItem value="Return Merchandise">Return Merchandise</MenuItem>
              </Select>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <Select
                id="warehouse-select"
                value={warehouse}
                onChange={handleWarehouseChange}
                fullWidth
                displayEmpty
                inputProps={{ "aria-label": "Select Warehouse" }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="WWRI">WWRI</MenuItem>
                <MenuItem value="ABNY">ABNY</MenuItem>
              </Select>
            </Typography>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={4}>
            <DesktopDatePicker
              label="Invoiced Date"
              onChange={() => {
                console.log("hello");
              }}
              slots={{
                textField: TextField,
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputLabelProps: {
                    shrink: true, // Ensures the label shrinks when the field is focused
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <DesktopDatePicker
              label="Order Date From"
              onChange={() => {
                console.log("hello");
              }}
              slots={
                {
                  // textField: TextField,
                }
              }
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputLabelProps: {
                    shrink: true, // Ensures the label shrinks when the field is focused
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <DesktopDatePicker
              label="Order Date To"
              onChange={() => {
                console.log("hello");
              }}
              slots={{
                textField: TextField,
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputLabelProps: {
                    shrink: true, // Ensures the label shrinks when the field is focused
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}
        >
          <Button variant="outlined" size="medium">
            Clear
          </Button>
          <Button
            variant="contained"
            size="medium"
            style={{ marginLeft: "8px" }}
          >
            Apply
          </Button>
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            marginTop: 10,
          }}
        >
          <TextField
            id="outlined-helperText"
            label="Search"
            defaultValue=""
            placeholder="Name, email, etc..."
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>PO#</TableCell>
                  <TableCell>OE#</TableCell>
                  <TableCell>Date Created</TableCell>
                  <TableCell>Created Time</TableCell>
                  <TableCell>Created By</TableCell>
                  <TableCell>Customer No</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Customer PO</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.PO}</TableCell>
                    <TableCell>{row.OE}</TableCell>
                    <TableCell>{row.DateCreated}</TableCell>
                    <TableCell>{row.CreatedTime}</TableCell>
                    <TableCell>{row.CreatedBy}</TableCell>
                    <TableCell>{row.CustomerNo}</TableCell>
                    <TableCell>{row.CustomerName}</TableCell>
                    <TableCell>{row.CustomerPO}</TableCell>
                    <TableCell>{row.Product}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <WorkIcon />
                      </IconButton>
                      <IconButton color="primary">
                        <EventIcon />
                      </IconButton>
                      <IconButton color="primary">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={5}
              page={0}
              onPageChange={() => {}}
              onRowsPerPageChange={() => {}}
            />
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
