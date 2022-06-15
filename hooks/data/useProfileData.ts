import { useEffect, useState } from "react";
import useSWR from "swr";
import pagesApi from "../../api/pages/pagesApi";
import { useUser } from "./useUser";

export async function useProfileData(id: number) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user, userData } = useUser();

  const fetcher = async () => {
    setIsLoading(true);
    let data = await pagesApi.getPagesByID(parseInt(userData?.id!));
    setIsLoading(false);
    setData(data);
  }

  useEffect(() => {
    fetcher()
  }, []);

  return { data, isLoading };
}
