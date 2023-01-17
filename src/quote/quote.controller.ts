import { Controller, Get, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller('')
export class QuoteController {
    constructor(
        private quoteService: QuoteService,
      ) {}
    
      @Get('quote')
      Authorcontroller(@Query() dto: any) {
        return this.quoteService.getQuoteservice(dto);
      }
}
