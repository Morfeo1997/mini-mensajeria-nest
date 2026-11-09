import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

  private messages = [
    {
      id: 1,
      username: 'juan123',
      content: '¡Hola a todos!',
      createdAt: new Date(),
    },
    {
      id: 2,
      username: 'maria',
      content: 'Este es mi primer mensaje.',
      createdAt: new Date(),
    },
  ];

  findAll() {
    return this.messages;
  }

}
