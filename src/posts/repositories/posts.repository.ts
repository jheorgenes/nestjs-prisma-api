import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from '../entities/post.entity';
import { UpdatePostDto } from '../dto/update-post.dto';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class PostsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    //Destructure authorEmail
    const { authorEmail } = createPostDto;

    //Deletando o authorEmail do DTO
    delete createPostDto.authorEmail;

    //buscando usuários pelo Email
    const user = await this.prisma.user.findUnique({
      where: {
        email: authorEmail
      }
    });

    if(!user) {
      throw new NotFoundError(`Author not found`);
    }

    //Pegando todos os dados do createPostDto e injetando em data (Usando a tipagem do prisma para garantia de integridade)
    const data: Prisma.PostCreateInput = {
      ...createPostDto,
      author: {
        connect: {
          email: authorEmail
        }
      }
    };

    return this.prisma.post.create({
      data: data
    });
  }

  async findAll(): Promise<PostEntity[]> {
    //Buscando todos os posts e o nome de todos os autores relacionados
    return this.prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findOne(id: number): Promise<PostEntity> {
    return this.prisma.post.findUnique({
      where: {
        id
      },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {

    const { authorEmail } = updatePostDto;

    //Se não foi enviado um authorEmail (atualiza somente o post)
    if(!authorEmail) {
      return this.prisma.post.update({
        data: updatePostDto,
        where: {
          id
        }
      })
    }

    //Remove o autor do dto
    delete updatePostDto.authorEmail;

    //Se chegou até aqui, busca o autor relacionado através do e-mail
    const user = await this.prisma.user.findUnique({
      where: {
        email: authorEmail
      }
    });

    if(!user) {
      throw new NotFoundError(`Author not found`);
    }

    //Pegando os dados do updatePostDto, o relacionamento do autor (através do e-mail)
    const data: Prisma.PostUpdateInput = {
      ...updatePostDto,
      author: {
        connect: {
          email: authorEmail
        }
      }
    }

    return this.prisma.post.update({
      where: {
        id
      },
      data, //Passando os dados que serão atualizados
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async remove(id: number): Promise<PostEntity> {
    return this.prisma.post.delete({
      where: {
        id
      }
    });
  }
}
