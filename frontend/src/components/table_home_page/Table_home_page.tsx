"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useState } from 'react'

function createData(
    printed: boolean,
    orderID: number,  // api name: data.order_id
    first_name: string,  // api name: data.shipping.adress 
    last_name: string,  // api name: data.shipping.adress
    blOrderStatus: string,  // api name: data.status     // TODO: create enum for this  
    blOrderRemarks: string,  // api name: data.remarks
    blOrderDate: string,  // api name: date_ordered      // TODO: create date object
    blOrderPrice: string,  // api name: data.cost.subtotal/grand_total/final_total                  
                                                         // TODO: make price object with "order total / final total" 
                                                         //        -> both should be money objects 
                                                         //        -> see labelPrice
                                                         // TODO: check which 2 prices you want to display (subtotal, grand_total, final_total?)
                                                         //        -> see documentation for definitions: https://www.bricklink.com/v3/api.page?page=resource-representations-order
    labelPurchaseDate: string,  // api name: ?           // create date object -> see blOrderDate
    labelPrice: string  // api name: ?                   // make money class
    ) {
    return { 
        printed,
        orderID, 
        first_name,
        last_name, 
        blOrderStatus, 
        blOrderRemarks, 
        blOrderDate, 
        blOrderPrice, 
        labelPurchaseDate, 
        labelPrice 
    };
}

const rows = [
  createData(true, 126678, "John", "Smith", "complete", "remarks A1", "02.03.2023", "23,22 / 29,12", "05.03.2023", "3,65"),
  createData(false, 126678, "John", "Smith", "complete", "A1", "02.03.2023", "23,22 / 29,12", "05.03.2023", "3,65"),
  createData(true, 126678, "John", "Smith", "complete", "remarks A1", "02.03.2023", "23,22 / 29,12", "05.03.2023", "3,65"),
  createData(true, 126678, "John", "Smith", "complete", "remarks A1", "02.03.2023", "23,22 / 29,12", "05.03.2023", "3,65"),
  createData(true, 126678, "John", "Smith", "complete", "remarks A1", "02.03.2023", "23,22 / 29,12", "05.03.2023", "3,65"),
];

export default function Table_home_page() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Label gedruckt?</TableCell>
                        <TableCell align="right">OrderID</TableCell>
                        <TableCell align="right">Name (Käufer)</TableCell>
                        <TableCell align="right">Bestell Status</TableCell>
                        <TableCell align="right">Order Remarks</TableCell>
                        <TableCell align="right">BL Bestell Datum</TableCell>
                        <TableCell align="right">BL Preis (order total/ final total)</TableCell>
                        <TableCell align="right">Label Kaufdatum</TableCell>
                        <TableCell align="right">Label Kaufpreis</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.orderID}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"><Checkbox color="primary" checked={row.printed} /></TableCell>
                            <TableCell align="right">{row.printed}</TableCell>
                            <TableCell align="right">{row.orderID}</TableCell>
                            <TableCell align="right">{row.first_name + ' ' + row.last_name}</TableCell>
                            <TableCell align="right">{row.blOrderStatus}</TableCell>
                            <TableCell align="right">{row.blOrderRemarks}</TableCell>
                            <TableCell align="right">{row.blOrderDate}</TableCell>
                            <TableCell align="right">{row.blOrderPrice}</TableCell>
                            <TableCell align="right">{row.labelPurchaseDate}</TableCell>
                            <TableCell align="right">{row.labelPrice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// https://www.mockaroo.com/
// https://www.youtube.com/watch?v=iALQ_YQ5dg0&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=2
