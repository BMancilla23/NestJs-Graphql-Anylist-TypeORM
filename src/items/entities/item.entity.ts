import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' }) // Nombre de la tabla en la base de datos
@ObjectType() // Decorador que indica que esta clase representa un tipo GraphQL
export class Item {
  
  @PrimaryGeneratedColumn('uuid') // Columna primaria generada automáticamente como UUID
  @Field(() => ID) // Campo expuesto en el esquema GraphQL como un ID
  id: string;

  @Column() // Columna en la base de datos
  @Field(() => String) // Campo expuesto en el esquema GraphQL como una cadena de texto
  name: string;

  @Column() // Columna en la base de datos
  @Field(() => Float) // Campo expuesto en el esquema GraphQL como un número de punto flotante
  quantity: number;

  @Column({nullable: true}) // Columna en la base de datos
  @Field(() => String, {nullable: true}) // Campo expuesto en el esquema GraphQL como una cadena de texto
  quantityUnits?: string; // Unidades de cantidad (por ejemplo: g, ml, kg, tsp)

  // Otros campos, relaciones, métodos, etc. pueden agregarse según sea necesario
}
