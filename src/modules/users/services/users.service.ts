import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { Helpers } from 'src/common/utils/helper';


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}


  
  async getUsers(page: number, limit: number, params?: any) {
   
    return await this.usersRepository.users(page, limit, params);
  }

   findById(id: string): Promise<User | null> {
    return  this.usersRepository.findById(id);
   }

    async update(id: string, updateUserDto: UpdateUserDto){ 
    // Check if user exists
    const user = await this.usersRepository.findById(id);

    if (!user) {
      // Custom not found response
      throw new NotFoundException({
        success: false,
        message: `User with ID ${id} not found`,
      });
    }

    // // ❌ Remove forbidden fields if client tried to send them
    // delete updateUserDto['id'];
    // delete updateUserDto['uuid'];
    // delete updateUserDto['email'];
  // ❌ Block fields not allowed
    const allowedFields = ['name', 'phone'];
      Object.keys(updateUserDto).forEach((key) => {
        if (!allowedFields.includes(key)) {
          delete updateUserDto[key];
        }
      });
    console.log('Filtered updateUserDto:', updateUserDto);
     // Update fields
    const updatedUser = Object.assign(user, updateUserDto);
  
    await this.usersRepository.update(id, updatedUser);


    return Helpers.responseJson(null,200,"User updated successfully",{"user":updatedUser});
    
  }
}
