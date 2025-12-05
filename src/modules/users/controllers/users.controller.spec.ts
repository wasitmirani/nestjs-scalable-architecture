import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUser: User = {
    id: 1,
    email: 'test@example.com',
    password: 'hashedpassword',
    firstName: 'Test',
    lastName: 'User',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockUsersService = {
    getUsers: jest.fn().mockResolvedValue({
      data: [mockUser],
      total: 1,
      page: 1,
      limit: 10,
      pages: 1,
    }),
    create: jest.fn().mockResolvedValue(mockUser),
    findOne: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn().mockResolvedValue(mockUser),
    remove: jest.fn().mockResolvedValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('users (GET)', () => {
    it('should return paginated users', async () => {
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.users(1, 10, {}, mockRes as any);

      expect(service.getUsers).toHaveBeenCalledWith(1, 10, {});
    });

    it('should return error when limit exceeds 100', async () => {
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.users(1, 101, {}, mockRes as any);

      expect(mockRes.status).toHaveBeenCalledWith(400);
    });

    it('should filter users by email', async () => {
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const params = { email: 'test@example.com' };
      await controller.users(1, 10, params, mockRes as any);

      expect(service.getUsers).toHaveBeenCalledWith(1, 10, params);
    });

    it('should return all users without pagination when isPaginated is 0', async () => {
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const params = { isPaginated: 0 };
      await controller.users(1, 10, params, mockRes as any);

      expect(service.getUsers).toHaveBeenCalledWith(1, 10, params);
    });
  });

//   describe('findOne (GET /:id)', () => {
//     it('should return a single user by id', async () => {
//       const result = await controller.findOne('1');
//       expect(result).toEqual(mockUser);
//       expect(service.findOne).toHaveBeenCalledWith('1');
//     });

//     it('should handle non-existent user', async () => {
//       mockUsersService.findOne.mockResolvedValueOnce(null);
//       const result = await controller.findOne('999');
//       expect(result).toBeNull();
//     });
//   });

//   describe('update (PATCH /:id)', () => {
//     it('should update a user', async () => {
//       const updateUserDto: UpdateUserDto = {
//         email: 'newemail@example.com',
//         firstName: 'Updated',
//       };

//       const result = await controller.update('1', updateUserDto);

//       expect(result).toEqual(mockUser);
//       expect(service.update).toHaveBeenCalledWith('1', updateUserDto);
//     });

//     it('should handle update with partial data', async () => {
//       const updateUserDto: UpdateUserDto = {
//         firstName: 'Updated',
//       };

//       const result = await controller.update('1', updateUserDto);

//       expect(result).toEqual(mockUser);
//       expect(service.update).toHaveBeenCalledWith('1', updateUserDto);
//     });
//   });

//   describe('remove (DELETE /:id)', () => {
//     it('should delete a user', async () => {
//       const result = await controller.remove('1');
//       expect(result).toBe(true);
//       expect(service.remove).toHaveBeenCalledWith('1');
//     });

//     it('should handle deleting non-existent user', async () => {
//       mockUsersService.remove.mockResolvedValueOnce(false);
//       const result = await controller.remove('999');
//       expect(result).toBe(false);
//     });
//   });
});
