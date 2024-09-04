import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = { email: string; password: string };
type SignInData = { id: string; email: string };
type AuthResult = { accessToken: string; id: string; email: string };

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.singIn(user);
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

  async singIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return { accessToken, email: user.email, id: user.id };
  }
}
