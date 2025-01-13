import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<Users>) {
    console.log(attrs);
    const userUpdate = await this.findOne(id);

    if (!userUpdate) throw new Error('User not found');
    Object.assign(userUpdate, attrs);
    return this.repo.save(userUpdate);
  }
  async remove(id: number) {
    const userUpdate = await this.findOne(id);
    if (!userUpdate) {
      throw new Error('User not found');
    }
    return this.repo.remove(userUpdate);
  }
}
