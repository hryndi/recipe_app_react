import { useCallback, useEffect, useState } from "react";
import { TFetchedRecepies, TDataState, HitsObj } from "../types";

export const useRecipe = () => {
  const [searchVal, setSearchVal] = useState<string>("chicken");
  const [dataArr, setDataArr] = useState<TFetchedRecepies | null>(null);

  const API_KEY: string = "8fc34999de0a843489c85f03a4cb3c85";
  const API_ID: string = "c48fab7e";
  const requestLink: string = `https://api.edamam.com/api/recipes/v2?type=any&q=${searchVal}&app_id=${API_ID}&app_key=${API_KEY}`;

  const fetchRecipe = useCallback(async () => {
    try {
      const response = await fetch(requestLink);
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      // can i map items from fetch, when i setting my items?
      const data: TFetchedRecepies = await response.json();
      setDataArr(data);
      console.log(dataArr);
    } catch (error) {
      console.error(error);
    }
  }, [requestLink]);

  useEffect(() => {
    fetchRecipe();
    // console.log(dataArr);
  }, [fetchRecipe, searchVal]);
  useEffect(() => {
    console.log(dataArr);
  }, [fetchRecipe]);
  return { setSearchVal, searchVal, fetchRecipe, dataArr };
};
