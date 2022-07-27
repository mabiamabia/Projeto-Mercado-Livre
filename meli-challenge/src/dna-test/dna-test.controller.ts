import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DnaTestService } from './dna-test.service';
import { CreateDnaTestDto } from './dto/create-dna-test.dto';
// import { UpdateDnaTestDto } from './dto/update-dna-test.dto';

@Controller('dna-test')
export class DnaTestController {
  constructor(private readonly dnaTestService: DnaTestService) {}

  @Post()
  create(@Body() createDnaTestDto: CreateDnaTestDto) {
    return this.dnaTestService.create(createDnaTestDto);
  }

  @Get()
  findAll() {
    return this.dnaTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dnaTestService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDnaTestDto: UpdateDnaTestDto) {
  //   return this.dnaTestService.update(+id, updateDnaTestDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dnaTestService.remove(+id);
  }
}
