import { AnyAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchUserRepositories } from "../../store/users.reducer";

export const useUserRepositories = (userLogin: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.userReducer.users.find(user => user.login === userLogin)?.repositories);

  useEffect(() => {
    dispatch(fetchUserRepositories(userLogin) as unknown as AnyAction);  //TODO fix type bug
  }, [userLogin, dispatch])

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data]);

  return {
    isLoading,
    data
  }
}