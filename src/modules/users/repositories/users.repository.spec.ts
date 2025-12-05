import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './users.repository';
import { User } from '../entities/user.entity';

describe('UsersRepository', () => {
  let repository: UsersRepository;
    beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRepository],
    }).compile();
    repository = module.get<UsersRepository>(UsersRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  describe('users (pagination and filtering)', () => {
    beforeEach(async () => {
      // Create test users
      await repository.create({
        email: 'user1@example.com',
        username: 'user1',
        password: 'password',
      });
      await repository.create({
        email: 'user2@example.com',
        username: 'user2',
        password: 'password',
      });
      await repository.create({
        email: 'user3@example.com',
        username: 'user3',
        password: 'password',
      });
    });

    it('should return paginated results', async () => {
      const result = await repository.users(1, 2);

      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('total');
      expect(result).toHaveProperty('page');
      expect(result.page).toBe(1);
    });

    it('should return all users without pagination when isPaginated is 0', async () => {
      const result = await repository.users(1, 10, { isPaginated: 0 });

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(3);
    });

    it('should filter by email', async () => {
      const result = await repository.users(1, 10, {
        email: 'user1@example.com',
      });

      expect(result).toHaveProperty('data');
      if (Array.isArray(result.data)) {
        expect(result.data.length).toBe(1);
        expect(result.data[0].email).toBe('user1@example.com');
      }
    });

    it('should handle pagination across pages', async () => {
      const page1 = await repository.users(1, 2);
      const page2 = await repository.users(2, 2);

      expect(page1.data).toBeDefined();
      expect(page2.data).toBeDefined();
    });

    it('should return correct total count', async () => {
      const result = await repository.users(1, 2);

      expect(result.total).toBe(3);
    });
  });
});
