import { CircularProgress, Grid, List } from '@mui/material';
import { type FC } from 'react';
import { Item, LoaderWrapper, RepoDescription, RepoName, StarIcon, StarsWrapper } from './userRepositories.style';
import { useUserRepositories } from './useUserRepositories'

interface UserRepositoriesProps {
  userLogin: string
}

export const UserRepositories: FC<UserRepositoriesProps> = ({ userLogin }) => {
  const { isLoading, data } = useUserRepositories(userLogin);

  if (isLoading) {
    return <LoaderWrapper><CircularProgress /></LoaderWrapper>
  }
  return <List
    component="div"
    aria-labelledby="nested-list-subheader"
  >{data?.map(repo => (<Item key={repo.id} disablePadding>
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <RepoName>{repo.name}</RepoName>
        <RepoDescription>{repo.description}</RepoDescription>
      </Grid>
      <Grid item xs={2}>
        <StarsWrapper><StarIcon />{repo.stargazers_count}</StarsWrapper>
      </Grid>
    </Grid>
  </Item>))}</List>
}
