export abstract class BaseRepository<T> {
  abstract create(data: any): Promise<T>;
  abstract findById(id: string | number): Promise<T | null>;
  abstract findAll(): Promise<T[]>;
  abstract update(id: string | number, data: any): Promise<T>;
  abstract delete(id: string | number): Promise<boolean>;
}
