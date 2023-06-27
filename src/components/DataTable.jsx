import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react';
import api from '../services/api.jsx'
import './DataTable.css'





export default function DataTable() {

  const [myArray, setMyArray] = useState();


  useEffect(() => {
    api
      .get("/selecao-2023/usuarios")
      .then((response) => setMyArray(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro!" + err);
      });
  }, []);

  const columns = [
    { field: 'codigo', headerName: 'ID', width: 70 },
    { field: 'nomeSocial', headerName: 'Nome social', width: 130 },
    { field: 'nomeCompleto', headerName: 'Nome completo', width: 260 },
    {
      field: 'sexo', headerName: 'Sexo',  width: 90,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 260,
    }
  ];



  return (
    <Box className='table-geral' sx={{ height: '100%', width: '100%' }}>
      {myArray && <DataGrid
        getRowId={(row) => row.codigo}
        rows={myArray}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        // checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
  );
}