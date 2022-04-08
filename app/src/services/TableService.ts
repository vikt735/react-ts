import $api from "../http";
import {AxiosResponse} from 'axios';
import {ITable} from "../models/ITable";


export default class TableService {
    static AddTable({ data, title, img, brand, description, color, price }: ITable): Promise<AxiosResponse<ITable>> {
      return $api.post<ITable>('/table', {data, title, img, brand, description, color, price})
    }
    static AllTable(): Promise<AxiosResponse<ITable[]>> {
        return $api.get<ITable[]>('/table')
    }
    
}
