import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
  userId: string;
  userName: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = [
      {
        userId: '1',
        userName: 'admin',
        password: '123',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === username);
  }

  async createOne(userData: any): Promise<any> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const userId = `${Date.now()}`;

    this.users.push({
      userId: userId,
      userName: userData.username,
      password: hashedPassword,
    });
  }
}
