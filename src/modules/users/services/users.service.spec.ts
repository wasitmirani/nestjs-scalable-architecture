import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  const mockUser: User = {
    id: 1,
    email: 'test@example.com',
    password: 'hashedpassword',
    firstName: 'Test',
    lastName: 'User',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockUsersRepository = {
    users: jest.fn().mockResolvedValue({
      data: [mockUser],
      total: 1,
      page: 1,
      limit: 10,
      pages: 1,
    }),
    create: jest.fn().mockResolvedValue(mockUser),
    findById: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn().mockResolvedValue(mockUser),
    delete: jest.fn().mockResolvedValue(true),
    findAll: jest.fn().mockResolvedValue([mockUser]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    it('should return paginated users', async () => {
      const result = await service.getUsers(1, 10);

      expect(result).toEqual({
        data: [mockUser],
        total: 1,
        page: 1,
        limit: 10,
        pages: 1,
      });
      expect(repository.users).toHaveBeenCalledWith(1, 10, undefined);
    });

    it('should pass params to repository', async () => {
      const params = { email: 'test@example.com' };
      await service.getUsers(1, 10, params);

      expect(repository.users).toHaveBeenCalledWith(1, 10, params);
    });

    it('should handle different page numbers', async () => {
      await service.getUsers(2, 20);

      expect(repository.users).toHaveBeenCalledWith(2, 20, undefined);
    });

    it('should handle filter by email', async () => {
      const params = { email: 'test@example.com' };
      await service.getUsers(1, 10, params);

      expect(repository.users).toHaveBeenCalledWith(1, 10, params);
    });
  });

//   describe('create', () => {
//     it('should create a new user', async () => {
//       const createUserDto: CreateUserDto = {
//         email: 'newuser@example.com',
//         username: 'newuser',
//         password: 'password123',
//         firstName: 'New',
//         lastName: 'User',
//       };

//       const result = await service.create(createUserDto);

//       expect(result).toEqual(mockUser);
//       expect(repository.create).toHaveBeenCalledWith(createUserDto);
//     });

//     it('should handle creation with minimal data', async () => {
//       const createUserDto: CreateUserDto = {
//         email: 'minimal@example.com',
//         username: 'minimal',
//         password: 'password123',
//       };

//       await service.create(createUserDto);

//       expect(repository.create).toHaveBeenCalledWith(createUserDto);
//     });
//   });

//   describe('findOne', () => {
//     it('should return a user by id', async () => {
//       const result = await service.findOne('1');

//       expect(result).toEqual(mockUser);
//       expect(repository.findById).toHaveBeenCalledWith('1');
//     });

//     it('should return null for non-existent user', async () => {
//       mockUsersRepository.findById.mockResolvedValueOnce(null);

//       const result = await service.findOne('999');

//       expect(result).toBeNull();
//     });

//     it('should work with string id', async () => {
//       await service.findOne('uuid-string-id');

//       expect(repository.findById).toHaveBeenCalledWith('uuid-string-id');
//     });
//   });

//   describe('update', () => {
//     it('should update a user', async () => {
//       const updateUserDto: UpdateUserDto = {
//         email: 'updated@example.com',
//         firstName: 'Updated',
//       };

//       const result = await service.update('1', updateUserDto);

//       expect(result).toEqual(mockUser);
//       expect(repository.update).toHaveBeenCalledWith('1', updateUserDto);
//     });

//     it('should handle partial update', async () => {
//       const updateUserDto: UpdateUserDto = {
//         firstName: 'OnlyFirstName',
//       };

//       await service.update('1', updateUserDto);

//       expect(repository.update).toHaveBeenCalledWith('1', updateUserDto);
//     });

//     it('should handle email update', async () => {
//       const updateUserDto: UpdateUserDto = {
//         email: 'newemail@example.com',
//       };

//       await service.update('1', updateUserDto);

//       expect(repository.update).toHaveBeenCalledWith('1', updateUserDto);
//     });
//   });

//   describe('remove', () => {
//     it('should delete a user', async () => {
//       const result = await service.remove('1');

//       expect(result).toBe(true);
//       expect(repository.delete).toHaveBeenCalledWith('1');
//     });

//     it('should return false when user not found', async () => {
//       mockUsersRepository.delete.mockResolvedValueOnce(false);

//       const result = await service.remove('999');

//       expect(result).toBe(false);
//     });

//     it('should work with different id formats', async () => {
//       await service.remove('uuid-string-id');

//       expect(repository.delete).toHaveBeenCalledWith('uuid-string-id');
//     });
//   });
});
