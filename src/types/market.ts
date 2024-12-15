export type PropsDatails ={
    name : string,
    description: string ,
    address: string ,
    phone:  string ,
    coupons : number,
    rules : {
        id: string,
        description: string 
    } [],
}

export type DataMarket = PropsDatails & {
    cover : string,
}