import { useCallback, useEffect, useState } from "react";
import { TFetchedRecepies } from "../types";

export const useRecipe = () => {
  const [searchVal, setSearchVal] = useState<string>("chicken");
  const [dataArr, setDataArr] = useState<TFetchedRecepies[]>([]);

  const API_KEY: string = "8fc34999de0a843489c85f03a4cb3c85";
  const API_ID: string = "c48fab7e";
  const requestLink: string = `https://api.edamam.com/api/recipes/v2?type=any&q=${searchVal}&app_id=${API_ID}&app_key=${API_KEY}`;

  const fetchRecipe = useCallback(async () => {
    try {
      const response = await fetch(requestLink);
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data: TFetchedRecepies = await response.json();
      setDataArr([data]);
    } catch (error) {
      console.error(error);
    }
  } , [requestLink]);

  useEffect(()=>{
    fetchRecipe();
  }, [fetchRecipe, searchVal]);
  return { setSearchVal, searchVal , fetchRecipe};
};
