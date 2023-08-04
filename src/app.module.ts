import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    introspection: true,
    autoSchemaFile: 'Schema.gql'
  }), // Se intancia la interfaz de graphql para poder hacer consultas a la base de datos 
    UserModule, //Se exporta el modulo de Usuarios
  MongooseModule.forRoot('mongodb://localhost:27017/admin')], // Método para establecer la conexion a la base de datos
  
})
export class AppModule {}
