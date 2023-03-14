import styled from "@emotion/styled";
import { Star } from "@mui/icons-material";
import { ListItem } from "@mui/material";

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
`;

export const Item = styled(ListItem)`
background: #bdbdbd;
border-radius: 8px;
padding: 15px 5px;
margin-bottom: 15px;

  &:nth-of-type(2n) {
    background: #e0e0e0;
  }
`;

export const RepoName = styled.h6`
  font-size: 18px;
  margin: 0;
  padding-bottom: 10px
`;

export const RepoDescription = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(Star)`
  color: #ffeb3b;
  margin-right: 5px;
`;