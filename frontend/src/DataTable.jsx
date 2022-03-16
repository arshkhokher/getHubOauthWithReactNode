import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },

  { field: 'name', headerName: 'Repository', width: 200 ,type:'string'},

  { field: 'description', headerName: 'Description', width: 200 },

  {
    field: 'clone_url',
    headerName: 'Clone Link',
    type: 'string',
    width: 300,
    renderCell: (params) => {
        return <a href={params.row.clone_url} >{params.row.clone_url}</a>;
    }  
  },

  {
    field: 'description',
    headerName: 'Description',
    sortable: false,
    width: 200
},
  {
      field: 'updated_at',
      headerName : 'Last Update Time',
      type: 'string',
    width: 200,
    renderCell: (params) => {
        //{console.log(params.row.permissions.admin)}
        //<h4>hello{params.row.permissions.admin ? "True" :"false"}</h4>
        },

  }
];

const columnsGist = [
    { field: 'id', headerName: 'ID', width: 150 },

    {
      field: 'html_url',
      headerName: 'Link',
      type: 'string',
      width: 300,
      renderCell: (params) => {
          return <a href={params.row.html_url} >{params.row.html_url}</a>;
      },  
    },

    {
      field: 'description',
      headerName: 'Description',
      sortable: false,
      width: 200,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },

    {
        field: 'created_at',
        headerName : 'Creation Time',
        type: 'string',
      width: 200,
      renderCell: (params) => {
          {Date(params.row.created_at)}
          },
},

{ field: 'updated_at', headerName: 'UpDated At', width: 170 }
    
];

export default function DataTable(props) {
const rows = props.repo;
const rowsGist= props.gist;
  return (
    <div style={{ height: 400, width: '100%' }}>
        <div align="center">Lists of Repostories</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection={false}
      />
      <div align="center">Lists of Gists</div>
      
      <DataGrid
        rows={rowsGist}
        columns={columnsGist}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection={false}
      />

    </div>
    
  );
}
