import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarios } from './user.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'usuarios', schema: usuarios}])], // Se establese la conexion a el lugar donde estan los registros y se establecen los datos que se quieren consultar 
  providers: [UserService, UserResolver] // Se establecen los proveedores de servicios 
})
export class UserModule {}
