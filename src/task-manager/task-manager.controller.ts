import {Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Patch, Delete, Query} from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';
import { CreateTaskDto } from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    return this.taskManagerService.findOne('' + id)
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskManagerService.create(createTaskDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskManagerService.update(id, updateTaskDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskManagerService.remove(id)
  }
}
