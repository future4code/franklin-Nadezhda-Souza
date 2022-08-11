import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { StyledToolbar } from './styled';
import Button from '@material-ui/core/Button';
import { goToRecipesList, goToLogin } from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    </Box>
  )
};