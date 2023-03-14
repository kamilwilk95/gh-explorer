import { Button } from "@mui/material"
import { ButtonWrapper, Form, InputWrapper, StyledTextField } from "./searchBox.style";
import { useSearchBox } from "./useSearchBox";

export const SearchBox = () => {
  const { onSubmit, registerUserName } = useSearchBox();

  return <Form onSubmit={onSubmit}>
    <InputWrapper>
      <StyledTextField label="Username" variant="standard" {...registerUserName} />
    </InputWrapper>
    <ButtonWrapper><Button variant="contained" type="submit">Search</Button></ButtonWrapper>
  </Form>
}