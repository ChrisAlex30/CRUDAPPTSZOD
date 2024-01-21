export type User={
    _id:string,
    name:string,
    email:string,
    gender:string
}

export type UserAdd=Omit<User,"_id">