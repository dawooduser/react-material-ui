import React from 'react';
import './style.css';
import { AppBar, Toolbar, Grid } from '@mui/material';
export default function App() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container>
            <Grid item>
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
