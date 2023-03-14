import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { UserItem } from "../userItem/userItem";

export const UsersList = () => {
  const users = useSelector((state: RootState) => state.userReducer.users);

  return <List
    component="div"
    aria-labelledby="nested-list-subheader"
  >{users.map(user => <UserItem key={user.id} avatar={user.avatar_url} login={user.login} />)}</List>
}