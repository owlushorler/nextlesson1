import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users') //
export class UsersController {
constructor(private readonly usersService: UsersService){}

@Get()//get /users
findAll(){
    return this.usersService.findAlll()
}

@Get()//get /users
findAlll(@Query("role") role?:"INTERN" | "ENGINEE" | "ADMIN" ){
    return this.usersService.findAlll(role)
}

@Get(":id")//Get/users/:id
findOne(@Param("id") id:string){
    return this.usersService.findOne(+id)
}
@Post() // post /user
create(@Body() user:{id:number,name:string, email:string, role:"INTERN" 
    |"ENGINEER" | "ADMIN"}){
    return this.usersService.create(user)
}

@Patch(":id")//Get/users/:id
update(@Param("id") id:string, @Body() user:{id:number,name:string, email:string, role?:"INTERN" 
    |"ENGINEER" | "ADMIN"}){
    return this.usersService.update(+id,user)
}


@Delete(":id")//Get/users/:id
delete(@Param("id") id:string){
    return this.usersService.delete(+id)


}
}
