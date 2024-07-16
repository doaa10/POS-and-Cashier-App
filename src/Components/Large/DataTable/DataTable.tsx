import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from './DataTable.module.css'
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 170,
    editable: true,
  },
  {
    field: 'Image',
    headerName: 'image',
    width: 170,
    editable: true,

  },
  {
    field: 'Size',
    headerName: 'Size',
    width: 170,
    editable: true,

  },
  {
    field: 'Price',
    headerName: 'Price',
    width: 170,
    editable: true,

  },

  {
    field: 'Action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
];

const rows = [
  { id: 1, Name: 'Beef Burger', Image: 'Jon', Size: 14 , Price : 12 , Action : 'edit   delete'},
  { id: 2, Name: 'chicken Burger', Image: 'Jon', Size: 14 , Price : 12 , Action : 'edit   delete' },

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
