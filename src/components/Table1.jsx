import { Table,TableBody,TableCell,TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {

    var [names,setName] = useState(["AA","BB","CC"])

  return (
    <div style={{paddingTop:"50px"}}>
        <br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style= {{color:'red',fontFamily:'cursive', fontSize:'15px' }}> Name</TableCell> 
                        <TableCell style= {{color:'red',fontFamily:'cursive', fontSize:'15px' }}> Major</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((val,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{val}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        
        </TableContainer>
    </div>
  )
}

export default Table1