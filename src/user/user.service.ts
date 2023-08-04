import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { userInput, userUpdate } from './input/user.input';
import { User } from './user.schema';
import { UserId } from './user.args';


@Injectable() 
export class UserService {
constructor (@InjectModel('usuarios') private readonly userModel: Model<User>) {} //Se exporto para poder obtener las funciones para menejar la base de datos


   async Usuarios(dato: String): Promise<User[]> { // Metodo Usuarios que espera un dato string que se almacenara en dato y el metodo devolvera un areglo user
    if(dato === "No"){   // Si dato es igual a No, Entra 
    return await this.userModel.find({ updatedAt: { $exists: false } }); // muetra todos los registros que no tengan el campo updatedAt
    }
    else if (dato === "Si") { // Si dato es igual a Si, Entra 
      return await this.userModel.find({ updatedAt: { $exists: true } }); // muetra todos los registros que tengan el campo updatedAt
    } else { // Cualquier otro dato, entra 
      return await this.userModel.find(); // Muestra todo en general 
    }
    
   }

   async usuario(Id: UserId): Promise<User[]> {// Metodo usuario que espera un dato string que se almacenara en Name y el metodo devolvera un areglo user
    
    return await this.userModel.find({ _id: Id }); // Muestra los registros que en el campo id concuerde con el dato capturado 
   }


   async crearusu(crearusuario : userInput): Promise<User> { // Metodo usuario que espera un dato userInput que se almacenara en crearusuario y el metodo devolvera un dato user
    const newuser = new this.userModel(crearusuario); // Se almacena userdate en el metodo de conexion y esto a su bes en la variable newuser
    return await newuser.save(); // Ya por ultimo se guarda el nuevo usuario en la base de datos 
   }

   async UpdateUser(update: userUpdate): Promise<User | null> { // Metodo usuario que espera un dato UpdateUser que se almacenara en update y el metodo devolvera un dato user
    const {id, ...userupdate} = update; // Del arreglo update se extrae el campo id y el resto de elementos se alacenan en userupdate
    return this.userModel.findOneAndUpdate({_id: id}, userupdate, {new: true}); // Se actualizan los datos del registro donde el _id concuerde con el id, los datos a actualizar son los de userdate, y se mostraran los campos modificados
   }

   async deleteUser(id: UserId): Promise<User | null> { // Metodo usuario que espera un dato string que se almacenara en id y el metodo devolvera un dato user
    return this.userModel.findOneAndDelete({ _id:id }); // Se elimina el registro que concuerde el campo _id con el valor capturado
  }
}


