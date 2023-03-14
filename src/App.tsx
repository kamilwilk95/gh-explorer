import { FC } from 'react';
import './App.css';
import { Grid } from '@mui/material';
import { SearchBox } from './components/searchBox/searchBox';
import { UsersList } from './components/usersList/usersList';

const App: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={3}>
        <SearchBox />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <UsersList />
      </Grid>
    </Grid>
  );
}

export default App;
