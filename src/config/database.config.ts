import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/users/entities/user.entity';

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'todo_app_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false ,
  logging: false,
  // process.env.NODE_ENV !== 'production'
  // logging: process.env.NODE_ENV === 'development
});
