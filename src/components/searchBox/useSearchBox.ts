import { AnyAction } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users.reducer";

export const useSearchBox = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm<{
    userName: string;
  }>();

  const registerUserName = register("userName");

  const onSubmit = handleSubmit(async (data) => {
    dispatch(fetchUsers(data.userName) as unknown as AnyAction); //TODO fix type bug
  })

  return { onSubmit, registerUserName };
}
