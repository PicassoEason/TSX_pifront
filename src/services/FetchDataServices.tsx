import axios from "axios"
export class FetchDataServices{
    private static URL:string="http://localhost:5001"
    public static getAlldata(){
        const DataURL:string='${URL}/min'
        return axios.get(DataURL)
    }
}