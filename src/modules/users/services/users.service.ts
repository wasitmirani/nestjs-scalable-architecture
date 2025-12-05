import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}


  
  async getUsers(page: number, limit: number, params?: any) {
   
    return await this.usersRepository.users(page, limit, params);
  }


}
