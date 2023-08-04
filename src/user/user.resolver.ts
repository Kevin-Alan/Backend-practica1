import { Args, Mutation, Query, Resolver } from "@nestjs/graphql" 
import { UserService } from "./user.service"
import { userInput, userUpdate } from "./input/user.input";
import { User } from "./user.schema";
import { UserId } from "./user.args";

@Resolver()
export class UserResolver{
    constructor(private readonly userService: UserService){} // Funciona para exportar los elementos de la clase user.server

    @Query(() => String) // Indicador de query(realiza actividades de lectura), que devolvera un String (cadena)
    async HelloWorld() { // Nombre de la query que se mostrara en graphql
        return "Hola Mundo"
    }

    @Query(() => [User]) // Es una query, que devuelve un areglo de tipo dateusuarios que se exporto de dto/datos.dto 
    async GetUsers(@Args('Mostrar_update') upda: string): Promise<User[]> { // El Args es el nombre del atributo que se capturara, que se almacenara en la variable upda (que es una cadea)
        return this.userService.Usuarios(upda); // Se regresara lo optenido del metedo Usuarios de la clase user.server, a la que se le paso el valor del upda
    }

    @Query(() => [User]) // Es una query, que devuelve un areglo de tipo dateusuarios que se exporto de dto/datos.dto 
    async GetUserByld(@Args('Id') id: UserId): Promise<User[]> { // El Args es el nombre del atributo que se capturara, que se almacenara en la variable name (que es una cadea)
        return this.userService.usuario(id); // Se regresara lo optenido del metedo usuario de la clase user.server, a la que se le paso el valor del name
    }

    @Mutation(() => User) // Es una mutacion (Realiza actividades de escritura o eliminacion), que devuelve datos de dateusuarios que se exporto de dto/datos.dto 
    async createuser(@Args('input') input: userInput): Promise<User> { // El Args es el nombre del atributo que se capturara, que se almacenara en la variable input (que es un areglo personalisado declarado en input/user.input.ts)
        return this.userService.crearusu(input); // Se regresara lo optenido del metedo crearusu de la clase user.server, a la que se le paso el valor del input
    }

    @Mutation(() => User) // Es una mutacion (Realiza actividades de escritura o eliminacion), que devuelve datos de dateusuarios que se exporto de dto/datos.dto 
    async updateuser(@Args('update') update: userUpdate): Promise<User> { // El Args es el nombre del atributo que se capturara, que se almacenara en la variable update (que es un areglo personalisado declarado en input/user.update.ts)
        return this.userService.UpdateUser(update); // Se regresara lo optenido del metedo UpdateUser de la clase user.server, a la que se le paso el valor del update
    }

    @Mutation(() => User) // Es una mutacion (Realiza actividades de escritura o eliminacion), que devuelve datos de dateusuarios que se exporto de dto/datos.dto 
    async deleteUser(@Args('ID') id: UserId): Promise<User> { // El Args es el nombre del atributo que se capturara, que se almacenara en la variable name (que es una cadea)
    return this.userService.deleteUser(id); // Se regresara lo optenido del metedo deletUser de la clase user.server, a la que se le paso el valor del name
    }
}