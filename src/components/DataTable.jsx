import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import api from '../services/api.jsx'
import './DataTable.css'






export default function DataTable({ search, valorRadio }) {

  const [myArray, setMyArray] = useState();


  useEffect(() => {
    const getData = setTimeout(() => {
      api
        .get(`/selecao-2023/usuarios?filtro=${search}`)
        .then((response) => setMyArray(response.data))
        .catch((err) => {
          console.error("Ops! Ocorreu um erro!" + err);
        });
    }, 500)

    return () => clearTimeout(getData)

  }, [search]);

  const columns = [
    { field: 'codigo', headerName: 'ID', width: 70 },
    { field: 'nomeSocial', headerName: 'Nome social', width: 130 },
    { field: 'situacao', headerName: 'Situação', width: 130, },
    { field: 'nomeCompleto', headerName: 'Nome completo', width: 260 },
    { field: 'email', headerName: 'E-mail', width: 250, },
    { field: 'numeroDeAcessos', headerName: 'Nº de Acessos', width: 130, },
    { field: 'sexo', headerName: 'Sexo', width: 90, },
    { field: 'dataDeNascimento', headerName: 'Aniversário', width: 130, },
    { field: 'estado', headerName: 'Estado', width: 130, },
    { field: 'municipio', headerName: 'Município', width: 180, },
    { field: 'dataDeVinculo', headerName: 'Data de Vinculo', width: 130 },
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
        disableRowSelectionOnClick
      />}
    </Box>
  );
}