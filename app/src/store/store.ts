import {IUser} from "../models/IUser";
import { ITable } from "../models/ITable";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import TableService from '../services/TableService';

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    table = {} as ITable;
    options = ["Lenovo", "Asus", "Aser", "Huawei", "Honor" ];
    tables: ITable[] = [];
    edit = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }
    setEdit(bool: boolean) {
        this.edit = bool;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    setTable(table: ITable) {
        this.table = table
    }
    removeTable (id: string)  {
        this.tables = this.tables.filter(todo => todo._id !== id)
    }
    get allTable() {
        return this.table
    }
    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            window.alert(e.response?.data?.message);
            
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            window.alert(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
    async getTable() {
        try {
            const response = await TableService.AllTable();
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    async create(table: ITable) {
        try {
            const response = await TableService.AddTable(table);
            const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', res.data.accessToken);
            this.setAuth(true);
            this.setUser(res.data.user);
            this.setTable(response.data);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    
    
}
