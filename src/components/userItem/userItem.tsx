import { ListItemButton, ListItemText, Collapse, List, ListItemIcon } from "@mui/material"
import { FC, useState } from "react"
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { UserAvatarImage } from "./userItem.style";
import { UserRepositories } from "../userRepositories/userRepositories";

interface Props {
  login: string;
  avatar: string;
}

export const UserItem: FC<Props> = ({ avatar, login }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => { setOpen(!open) };

  return <><ListItemButton onClick={handleClick}>
    <ListItemIcon>
      <UserAvatarImage src={avatar} alt={`${login}-avatar`} />
    </ListItemIcon>
    <ListItemText primary={login} />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <UserRepositories userLogin={login} />
      </List>
    </Collapse></>
}