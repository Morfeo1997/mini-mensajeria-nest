import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';

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
  
  create(dto: CreateMessageDto): Message {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      username: dto.username.trim(),
      content: dto.content.trim(),
      createdAt: new Date(),
    };
    
    this.messages.push(newMessage);
  }

  findAll() {
    return this.messages;
  }

}
