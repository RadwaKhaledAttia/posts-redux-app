import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import useStyles from './style'
import EditPost from '../../modules/EditPost'

const columns = [
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'body',
    label: 'Description',
    minWidth: 200,
  },
  {
    id: 'actions',
    label: 'Action',
    minWidth: 170,
    align: 'center',
  },
]

function createData(title, body, id) {
  return { title, body, id }
}

const TableComponent = ({ posts }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [openEdit, setOpenEdit] = useState(false)

  const rows = posts.map(post =>
    createData(post.title, post.body.substring(0, 80) + '...', post.id),
  )

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper
      sx={{ width: '100%', overflow: 'hidden' }}
      className={classes.tableHolder}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id !== 'actions' && value}
                          {column.id === 'actions' && (
                            <div className={classes.actionsHolder}>
                              <Link href={`/post/${row.id}`}>
                                <VisibilityIcon />
                              </Link>
                              <EditIcon
                                onClick={() => {
                                  setOpenEdit(true)
                                  Router.push({ query: { id: row.id } })
                                }}
                              />
                              <DeleteIcon />
                            </div>
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {openEdit && <EditPost open={openEdit} setOpen={setOpenEdit} />}
    </Paper>
  )
}

export default TableComponent
