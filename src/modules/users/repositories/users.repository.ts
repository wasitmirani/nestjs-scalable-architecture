import { Injectable } from '@nestjs/common';
// import { BaseRepository } from '../../../common/base/base.repository';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, PaginationResult } from  '../../../common/utils/pagination';


@Injectable()
export class UsersRepository  {
    constructor(@InjectRepository(User)private readonly userRepo: Repository<User>) {

    }

  async users(page: number, limit: number, params?: any): Promise<PaginationResult<User> | any[]> {
    const qb = this.userRepo.createQueryBuilder('users').select().orderBy('users.id', 'DESC');

    if (params?.email) {
      qb.where('users.email = :email', { email: params.email });
    }
    
    if(params?.isPaginated == 0){
       return qb.getMany();
    }
      // Apply pagination
    return paginate(qb, { page, limit, baseUrl: '/users' });
 
  }


  
}
