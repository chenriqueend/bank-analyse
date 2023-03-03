export interface IAnalysis {
    id?:string,
    name?: string,
    result?: string,
    rules?: Rule;
}

interface Rule{
    blocked: any[]
    alerts: any[]
    proceed: any[]
}