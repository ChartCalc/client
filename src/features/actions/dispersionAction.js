import {createAsyncThunk} from "@reduxjs/toolkit";
import {base_url} from "../../utils/constants";

export const fetchDispersion = createAsyncThunk(
    "fetch/dispersion",
    async ({symbol,from,to,interval}) => {

        const url = `${base_url}?symbol=${symbol}&from=${from}&to=${to}&interval=${interval}`;
        console.log("fetching..." + url);
        const response = await fetch(url)
        console.log(response)
        const data = await response.json();
        console.log(data);
        return data.averageReturn;
    }
)