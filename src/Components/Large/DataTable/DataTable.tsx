'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from './DataTable.module.css'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 130,
    editable: true,
  },
  {
    field: 'Image',
    headerName: 'image',
    width: 130,
    editable: true,

  },
  {
    field: 'Category',
    headerName: 'Category',
    width: 130,
    editable: true,

  },
  {
    field: 'Size',
    headerName: 'Size',
    width: 130,
    editable: true,

  },
  {
    field: 'Price',
    headerName: 'Price',
    width: 130,
    editable: true,

  },
  {
    field: 'Amount',
    headerName: 'Amount',
    width: 130,
    editable: true,

  },
  {
    field: 'ingredients',
    headerName: 'ingredients',
    width: 150,
    editable: true,

  },

  {
    field: 'Action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 135,
    renderCell: (params) => (
      <div className={styles.actions}>
        <button>
          <FaEdit size={20}
            color='#C8161D'
            style={{ cursor: 'pointer', marginRight: 10 }}
          />
        </button>
       
       <button>
        <RiDeleteBin5Fill  size={20} 
            color='#C8161D'
            style={{ cursor: 'pointer' }}
        />
       </button>
        
      </div>
    ),
  },
];

const rows = [
  { id: 1, Name: 'Beef Burger', Image: 'Jon', Category: 'Beef',Size: 14 , Price : 12 ,Amount: 20 ,ingredients :'beef , cheese , ranch'},
  { id: 2, Name: 'chicken Burger', Image: 'Jon',Category: 'chicken', Size: 14 , Price : 12 ,Amount: 40 , ingredients :'beef , cheese , ranch'},

];

export default function DataTable() {
  return (
    <div >
    <Box sx={{ height: 400, width: '100%' ,}}  >
      <DataGrid
      className={styles.dataGridContainer}
        rows={rows}
        columns={columns}
       
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
    
        classes={{
            columnHeader : styles.superAppHeader, 
            checkboxInput: styles.customCheckbox
          }}
      />
    </Box>
    </div>

  );
}
