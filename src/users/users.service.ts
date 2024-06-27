import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private user =[
        {
            id:1,
            name:"eniola",
            email:"@eniola",
            role:"ENGINEER"
        },
        {
            id:2,
            name:"eniola2",
            email:"@eniola2",
            role:"ADMIN"
        },
        {
            id:3,
            name:"eniola3",
            email:"@eniola3",
            role:"INTERN"
        },
        {
            id:4,
            name:"eniola4",
            email:"@eniola4",
            role:"ENGINEER"
        },
        {
            id:5,
            name:"eniola5",
            email:"@eniola5",
            role:"INTERN"
        },
        {
            id:6,
            name:"eniola6",
            email:"@eniola6",
            role:"ADMIN"
        }

    ]
    

    findAlll(role?:"INTERN" | "ENGINEE" | "ADMIN"){
        if(role){
            return this.user.filter(user => user.role === role)
        }
        return this.user
    }

    findOne(id:number){
        const user = this.user.find(user => user.id =  id)
        return user
    }

    create(user:{id:number,name:string, email:string, role:"INTERN" 
        |"ENGINEER" | "ADMIN"}){
            this.user.push(user)

            return user
        }

update(id:number,user:{id:number,name:string, email:string, role?:"INTERN" 
    |"ENGINEER" | "ADMIN"}){
         this.user = this.user.map(user=>{
           if(user.id === id){
            return{
                ...user,...user
            }
            return user
           }
         })
}

delete(id:number){
    const removerUser = this.findOne(id)

    this.user = this.user.filter(user => user.id != id)

    return removerUser
}

}
