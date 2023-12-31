import { UpdateUserDto } from './../dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository {

  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto
    });
  }

  async findAll(): Promise<UserEntity[]> {
    // Trás os usuários e também cada titulo e data de criação dos posts relacionados
    return this.prisma.user.findMany({
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true
          }
        }
      }
    });
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true
          }
        }
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto,
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true
          }
        }
      }
    });
  }

  async remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
