import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../common/base/base.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersRepository extends BaseRepository<User> {
  async create(data: any): Promise<User> {
    // TODO: Implement database create
    throw new Error('Method not implemented.');
  }

  async findById(id: string | number): Promise<User | null> {
    // TODO: Implement database findById
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<User[]> {
    // TODO: Implement database findAll
    throw new Error('Method not implemented.');
  }

  async update(id: string | number, data: any): Promise<User> {
    // TODO: Implement database update
    throw new Error('Method not implemented.');
  }

  async delete(id: string | number): Promise<boolean> {
    // TODO: Implement database delete
    throw new Error('Method not implemented.');
  }
}
