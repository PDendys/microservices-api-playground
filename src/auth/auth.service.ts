import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signUpLocal() {}

  signInLocal() {}

  logout() {}

  refreshTokens() {}
}
