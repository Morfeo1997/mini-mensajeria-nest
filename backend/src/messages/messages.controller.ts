import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service.js';
import { CreateMessageDto } from './create-message.dto';

@Controller('messages')
export class MessagesController {

  constructor(
    private readonly messagesService: MessagesService,
  ) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }
  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

}
