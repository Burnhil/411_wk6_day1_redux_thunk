import React from 'react'
import { Button, Container, IconButton, Menu, MenuItem, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { MoreVert } from '@material-ui/icons'


const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((row, index) => (
                        <TableRow key={row.MakeId}>
                            <TableCell>{row["MakeId"]}</TableCell>
                            <TableCell>{row["MakeName"]}</TableCell>
                            <TableCell>
                                
                                
                                <IconButton
										helvetica-label="more"
										helvetica-controls="long-menu"
										helvetica-haspopup="true"
										onClick={handleClick}>
										<MoreVert />
								</IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => props.deleteMake(index)}>Delete</MenuItem>
                    
                                </Menu>
                            </TableCell>

                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </Container>
    )
}

export default Import