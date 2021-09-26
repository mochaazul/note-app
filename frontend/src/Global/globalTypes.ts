//this one just to help me to asign useLocation Types
export interface LocationParams<Data> {
    pathname: string;
    state: Data;
    search: string;
    hash: string;
    key: string;
}