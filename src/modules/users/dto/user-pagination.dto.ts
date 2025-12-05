export class UserPaginationDto {
  page?: number = 1;
  limit?: number = 10;
  search?: string;
  sortBy?: string = 'createdAt';
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
}
