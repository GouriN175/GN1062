import { AppBar,Button,Toolbar,Typography} from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'



const Navi = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow: 1 }} align='left'color='darkblue'>Trial1</Typography>
                <Button variant='text' color='warning'>Login</Button>
                <Button varinat='text'color='info'><Link to={'/'}style={{textDecoration:'none', color:'white'}}>Home</Link></Button>
                <Button varinat='text'color='info'><Link to={'/Table1'}style={{textDecoration:'none', color:'white'}}>Table</Link></Button>
                <Button varinat='text'color='info'><Link to={'/First'}style={{textDecoration:'none', color:'white'}}>Profile</Link></Button>
                <Button variant='text'color='info'><Link to={'/axios'}style={{textDecoration:'none', color:'white'}}>axios</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navi