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



let testData = [{
    "printed": false,
    "orderID": 679901,
    "first_name": "Léane",
    "last_name": "Tace",
    "blOrderStatus": "delivered",
    "blOrderRemarks": "B12",
    "blOrderDate": "08/02/2024",
    "blOrderPrice": 2903.8,
    "labelPurchaseDate": "25/10/2023",
    "labelPrice": 86.64
  }, {
    "orderID": 670767,
    "first_name": "Anaëlle",
    "last_name": "Aylmer",
    "blOrderStatus": "received",
    "blOrderRemarks": "A242",
    "blOrderDate": "03/10/2023",
    "blOrderPrice": 6683.68,
    "labelPurchaseDate": "20/10/2023",
    "labelPrice": 387.4
  }, {
    "printed": false,
    "orderID": 851588,
    "first_name": "Edmée",
    "last_name": "Baake",
    "blOrderStatus": "received",
    "blOrderDate": "07/05/2023",
    "blOrderPrice": 4878.89,
    "labelPurchaseDate": "03/01/2024",
    "labelPrice": 475.8
  }, {
    "orderID": 263047,
    "first_name": "Frédérique",
    "last_name": "Pavy",
    "blOrderStatus": "processing",
    "blOrderDate": "14/08/2023",
    "blOrderPrice": 4662.22,
    "labelPurchaseDate": "07/01/2024",
    "labelPrice": 123.75
  }, {
    "printed": true,
    "orderID": 916835,
    "first_name": "Mélodie",
    "last_name": "Bordone",
    "blOrderStatus": "received",
    "blOrderRemarks": "I902",
    "blOrderDate": "25/03/2023",
    "blOrderPrice": 8485.67,
    "labelPurchaseDate": "29/12/2023",
    "labelPrice": 29.02
  }, {
    "orderID": 801811,
    "first_name": "Vérane",
    "last_name": "Aughtie",
    "blOrderStatus": "shipped",
    "blOrderRemarks": "B352",
    "blOrderDate": "17/08/2023",
    "blOrderPrice": 9916.81,
    "labelPurchaseDate": "06/06/2023",
    "labelPrice": 132.45
  }, {
    "orderID": 474583,
    "first_name": "Néhémie",
    "last_name": "Llop",
    "blOrderStatus": "complete",
    "blOrderDate": "29/12/2023",
    "blOrderPrice": 440.81,
    "labelPurchaseDate": "27/08/2023",
    "labelPrice": 478.11
  }, {
    "printed": false,
    "orderID": 465871,
    "first_name": "Athéna",
    "last_name": "Fabler",
    "blOrderStatus": "received",
    "blOrderDate": "19/08/2023",
    "blOrderPrice": 2371.24,
    "labelPurchaseDate": "13/07/2023",
    "labelPrice": 4.08
  }, {
    "orderID": 955331,
    "first_name": "Maëlyss",
    "last_name": "Winscom",
    "blOrderStatus": "cancelled",
    "blOrderDate": "28/06/2023",
    "blOrderPrice": 8789.96,
    "labelPurchaseDate": "25/10/2023",
    "labelPrice": 223.68
  }, {
    "printed": true,
    "orderID": 361392,
    "first_name": "Marie-thérèse",
    "last_name": "Domelow",
    "blOrderStatus": "cancelled",
    "blOrderRemarks": "Z234",
    "blOrderDate": "18/10/2023",
    "blOrderPrice": 5637.24,
    "labelPurchaseDate": "25/08/2023",
    "labelPrice": 435.98
  }, {
    "printed": true,
    "orderID": 152319,
    "first_name": "Cunégonde",
    "last_name": "Malham",
    "blOrderStatus": "pending",
    "blOrderDate": "15/06/2023",
    "blOrderPrice": 9997.07,
    "labelPurchaseDate": "27/09/2023",
    "labelPrice": 429.47
  }, {
    "printed": true,
    "orderID": 361028,
    "first_name": "Estève",
    "last_name": "Curnnok",
    "blOrderStatus": "received",
    "blOrderDate": "27/05/2023",
    "blOrderPrice": 6167.46,
    "labelPurchaseDate": "23/06/2023",
    "labelPrice": 26.82
  }, {
    "printed": true,
    "orderID": 792197,
    "first_name": "Kù",
    "last_name": "Grinter",
    "blOrderStatus": "received",
    "blOrderRemarks": "G392",
    "blOrderDate": "09/11/2023",
    "blOrderPrice": 3158.57,
    "labelPurchaseDate": "08/04/2023",
    "labelPrice": 113.23
  }, {
    "orderID": 616796,
    "first_name": "Léonie",
    "last_name": "Karlolak",
    "blOrderStatus": "cancelled",
    "blOrderRemarks": "A12",
    "blOrderDate": "27/12/2023",
    "blOrderPrice": 184.92,
    "labelPurchaseDate": "07/07/2023",
    "labelPrice": 171.28
  }, {
    "printed": true,
    "orderID": 865347,
    "first_name": "Ruò",
    "last_name": "Bulluck",
    "blOrderStatus": "delivered",
    "blOrderDate": "17/07/2023",
    "blOrderPrice": 699.38,
    "labelPurchaseDate": "23/03/2023",
    "labelPrice": 140.82
  }, {
    "orderID": 475173,
    "first_name": "Bérangère",
    "last_name": "Greenhall",
    "blOrderStatus": "delivered",
    "blOrderRemarks": "A22",
    "blOrderDate": "20/11/2023",
    "blOrderPrice": 7460.05,
    "labelPurchaseDate": "21/10/2023",
    "labelPrice": 452.97
  }, {
    "orderID": 610160,
    "first_name": "Noémie",
    "last_name": "O' Brian",
    "blOrderStatus": "pending",
    "blOrderDate": "04/06/2023",
    "blOrderPrice": 2760.07,
    "labelPurchaseDate": "11/07/2023",
    "labelPrice": 192.84
  }, {
    "orderID": 176947,
    "first_name": "Marie-thérèse",
    "last_name": "Gautrey",
    "blOrderStatus": "pending",
    "blOrderRemarks": "A12",
    "blOrderDate": "19/07/2023",
    "blOrderPrice": 6859.23,
    "labelPurchaseDate": "17/03/2023",
    "labelPrice": 361.09
  }, {
    "printed": false,
    "orderID": 808819,
    "first_name": "Judicaël",
    "last_name": "Chrichton",
    "blOrderStatus": "complete",
    "blOrderRemarks": "I932",
    "blOrderDate": "23/04/2023",
    "blOrderPrice": 5133.56,
    "labelPurchaseDate": "18/12/2023",
    "labelPrice": 359.93
  }, {
    "orderID": 758528,
    "first_name": "Véronique",
    "last_name": "Eisikowitch",
    "blOrderStatus": "processing",
    "blOrderRemarks": "D93",
    "blOrderDate": "23/04/2023",
    "blOrderPrice": 6887.71,
    "labelPurchaseDate": "12/07/2023",
    "labelPrice": 457.48
  }, {
    "printed": false,
    "orderID": 173450,
    "first_name": "Bérengère",
    "last_name": "Laurens",
    "blOrderStatus": "processing",
    "blOrderDate": "05/09/2023",
    "blOrderPrice": 6094.32,
    "labelPurchaseDate": "22/01/2024",
    "labelPrice": 297.76
  }, {
    "orderID": 271277,
    "first_name": "Aloïs",
    "last_name": "Lowe",
    "blOrderStatus": "pending",
    "blOrderRemarks": "B352",
    "blOrderDate": "11/07/2023",
    "blOrderPrice": 1895.96,
    "labelPurchaseDate": "07/07/2023",
    "labelPrice": 486.46
  }, {
    "orderID": 476247,
    "first_name": "Gaïa",
    "last_name": "O'Hara",
    "blOrderStatus": "cancelled",
    "blOrderRemarks": "G42",
    "blOrderDate": "04/10/2023",
    "blOrderPrice": 7154.0,
    "labelPurchaseDate": "02/06/2023",
    "labelPrice": 165.73
  }, {
    "printed": true,
    "orderID": 274220,
    "first_name": "Méthode",
    "last_name": "Kimpton",
    "blOrderStatus": "complete",
    "blOrderDate": "07/09/2023",
    "blOrderPrice": 315.27,
    "labelPurchaseDate": "14/03/2023",
    "labelPrice": 319.08
  }, {
    "printed": true,
    "orderID": 958991,
    "first_name": "Anaëlle",
    "last_name": "Northcliffe",
    "blOrderStatus": "processing",
    "blOrderRemarks": "N32",
    "blOrderDate": "10/10/2023",
    "blOrderPrice": 8869.45,
    "labelPurchaseDate": "28/10/2023",
    "labelPrice": 296.07
  }, {
    "printed": true,
    "orderID": 603482,
    "first_name": "Östen",
    "last_name": "Dudney",
    "blOrderStatus": "shipped",
    "blOrderDate": "17/03/2023",
    "blOrderPrice": 2564.64,
    "labelPurchaseDate": "19/08/2023",
    "labelPrice": 193.79
  }, {
    "printed": true,
    "orderID": 484914,
    "first_name": "Océane",
    "last_name": "Juanes",
    "blOrderStatus": "cancelled",
    "blOrderRemarks": "B12",
    "blOrderDate": "26/03/2023",
    "blOrderPrice": 6742.36,
    "labelPurchaseDate": "25/04/2023",
    "labelPrice": 197.79
  }, {
    "orderID": 165016,
    "first_name": "Sòng",
    "last_name": "Gantzman",
    "blOrderStatus": "cancelled",
    "blOrderDate": "27/08/2023",
    "blOrderPrice": 5342.71,
    "labelPurchaseDate": "19/06/2023",
    "labelPrice": 222.55
  }, {
    "orderID": 411086,
    "first_name": "Léone",
    "last_name": "Gwyn",
    "blOrderStatus": "pending",
    "blOrderDate": "27/12/2023",
    "blOrderPrice": 5350.27,
    "labelPurchaseDate": "16/01/2024",
    "labelPrice": 287.99
  }, {
    "printed": true,
    "orderID": 338482,
    "first_name": "Chloé",
    "last_name": "Nana",
    "blOrderStatus": "cancelled",
    "blOrderDate": "17/02/2024",
    "blOrderPrice": 764.81,
    "labelPurchaseDate": "24/09/2023",
    "labelPrice": 441.4
  }, {
    "orderID": 165853,
    "first_name": "Lauréna",
    "last_name": "Standrin",
    "blOrderStatus": "received",
    "blOrderRemarks": "L932",
    "blOrderDate": "23/10/2023",
    "blOrderPrice": 170.16,
    "labelPurchaseDate": "03/06/2023",
    "labelPrice": 162.39
  }, {
    "orderID": 253107,
    "first_name": "Nuó",
    "last_name": "Stanbury",
    "blOrderStatus": "pending",
    "blOrderDate": "06/06/2023",
    "blOrderPrice": 2462.17,
    "labelPurchaseDate": "09/06/2023",
    "labelPrice": 443.6
  }, {
    "printed": true,
    "orderID": 552169,
    "first_name": "Lèi",
    "last_name": "Inwood",
    "blOrderStatus": "delivered",
    "blOrderDate": "26/12/2023",
    "blOrderPrice": 8595.75,
    "labelPurchaseDate": "21/11/2023",
    "labelPrice": 272.58
  }, {
    "printed": true,
    "orderID": 595152,
    "first_name": "Marie-thérèse",
    "last_name": "Valentelli",
    "blOrderStatus": "complete",
    "blOrderDate": "02/05/2023",
    "blOrderPrice": 8718.31,
    "labelPurchaseDate": "29/01/2024",
    "labelPrice": 243.56
  }, {
    "printed": true,
    "orderID": 231578,
    "first_name": "Uò",
    "last_name": "Chittock",
    "blOrderStatus": "complete",
    "blOrderRemarks": "G42",
    "blOrderDate": "09/06/2023",
    "blOrderPrice": 8987.85,
    "labelPurchaseDate": "07/02/2024",
    "labelPrice": 136.04
  }, {
    "orderID": 954556,
    "first_name": "Marylène",
    "last_name": "Summerton",
    "blOrderStatus": "cancelled",
    "blOrderRemarks": "Z234",
    "blOrderDate": "09/07/2023",
    "blOrderPrice": 3003.6,
    "labelPurchaseDate": "23/06/2023",
    "labelPrice": 422.22
  }, {
    "printed": false,
    "orderID": 642156,
    "first_name": "Amélie",
    "last_name": "Petrushkevich",
    "blOrderStatus": "received",
    "blOrderRemarks": "M240",
    "blOrderDate": "20/05/2023",
    "blOrderPrice": 894.8,
    "labelPurchaseDate": "22/11/2023",
    "labelPrice": 372.18
  }, {
    "orderID": 993805,
    "first_name": "Géraldine",
    "last_name": "Aubury",
    "blOrderStatus": "shipped",
    "blOrderDate": "31/01/2024",
    "blOrderPrice": 6332.31,
    "labelPurchaseDate": "08/08/2023",
    "labelPrice": 55.53
  }, {
    "orderID": 971795,
    "first_name": "Magdalène",
    "last_name": "Hebbes",
    "blOrderStatus": "processing",
    "blOrderRemarks": "B352",
    "blOrderDate": "09/06/2023",
    "blOrderPrice": 803.41,
    "labelPurchaseDate": "24/11/2023",
    "labelPrice": 72.99
  }, {
    "orderID": 907842,
    "first_name": "Geneviève",
    "last_name": "Pemble",
    "blOrderStatus": "pending",
    "blOrderRemarks": "G382",
    "blOrderDate": "29/05/2023",
    "blOrderPrice": 2098.84,
    "labelPurchaseDate": "28/04/2023",
    "labelPrice": 264.64
  }, {
    "printed": false,
    "orderID": 921020,
    "first_name": "Rachèle",
    "last_name": "Karslake",
    "blOrderStatus": "complete",
    "blOrderRemarks": "Z230",
    "blOrderDate": "17/03/2023",
    "blOrderPrice": 2230.48,
    "labelPurchaseDate": "22/01/2024",
    "labelPrice": 457.78
  }, {
    "orderID": 222424,
    "first_name": "Andréa",
    "last_name": "De Wolfe",
    "blOrderStatus": "processing",
    "blOrderRemarks": "G39",
    "blOrderDate": "11/06/2023",
    "blOrderPrice": 4090.18,
    "labelPurchaseDate": "15/01/2024",
    "labelPrice": 279.83
  }, {
    "orderID": 202477,
    "first_name": "Cunégonde",
    "last_name": "Stoile",
    "blOrderStatus": "cancelled",
    "blOrderRemarks": "Z234",
    "blOrderDate": "20/06/2023",
    "blOrderPrice": 1512.09,
    "labelPurchaseDate": "07/03/2023",
    "labelPrice": 424.46
  }, {
    "printed": true,
    "orderID": 506934,
    "first_name": "Anaëlle",
    "last_name": "Tipling",
    "blOrderStatus": "shipped",
    "blOrderDate": "05/07/2023",
    "blOrderPrice": 7761.73,
    "labelPurchaseDate": "02/11/2023",
    "labelPrice": 488.77
  }, {
    "orderID": 485035,
    "first_name": "Bérengère",
    "last_name": "Habberjam",
    "blOrderStatus": "delivered",
    "blOrderRemarks": "D931",
    "blOrderDate": "02/03/2023",
    "blOrderPrice": 5406.85,
    "labelPurchaseDate": "21/06/2023",
    "labelPrice": 28.88
  }, {
    "printed": true,
    "orderID": 629488,
    "first_name": "Illustrée",
    "last_name": "Winsper",
    "blOrderStatus": "received",
    "blOrderRemarks": "Z234",
    "blOrderDate": "11/05/2023",
    "blOrderPrice": 8535.59,
    "labelPurchaseDate": "15/11/2023",
    "labelPrice": 378.8
  }, {
    "printed": false,
    "orderID": 787764,
    "first_name": "Josée",
    "last_name": "Shivlin",
    "blOrderStatus": "complete",
    "blOrderDate": "18/05/2023",
    "blOrderPrice": 3980.36,
    "labelPurchaseDate": "20/01/2024",
    "labelPrice": 340.29
  }, {
    "printed": true,
    "orderID": 573522,
    "first_name": "Andréa",
    "last_name": "Sandeford",
    "blOrderStatus": "received",
    "blOrderDate": "02/06/2023",
    "blOrderPrice": 3368.13,
    "labelPurchaseDate": "30/10/2023",
    "labelPrice": 229.09
  }, {
    "printed": true,
    "orderID": 164999,
    "first_name": "Nélie",
    "last_name": "Torri",
    "blOrderStatus": "shipped",
    "blOrderDate": "29/11/2023",
    "blOrderPrice": 1283.11,
    "labelPurchaseDate": "02/02/2024",
    "labelPrice": 140.94
  }, {
    "printed": false,
    "orderID": 581895,
    "first_name": "Véronique",
    "last_name": "Dorricott",
    "blOrderStatus": "cancelled",
    "blOrderDate": "28/08/2023",
    "blOrderPrice": 8260.25,
    "labelPurchaseDate": "04/02/2024",
    "labelPrice": 205.84
  }]
// https://www.mockaroo.com/
// https://www.youtube.com/watch?v=iALQ_YQ5dg0&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=2