import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

type AuthInput = { email: string; password: string };
type SignInData = { id: string; email: string };
type AuthResult = { accessToken: string; id: string; email: string };

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: 'fake-access',
      id: user.id,
      email: user.email,
    };
  }

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.usersService.findByEmail(input.email);

    if (user && user.password === input.password) {
      return {
        id: String(user.id),
        email: user.email,
      };
    }
    return null;
  }
}
