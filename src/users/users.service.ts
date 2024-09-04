import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.isActive = createUserDto.isActive;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();

    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.isActive = updateUserDto.isActive;

    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
