import { DbService } from './providers/db/db.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  constructor(private db: DbService) {}
  
  getCategories(){
    return this.db.categories.findMany( {
      orderBy: { id: "desc" }
    } )
  }

  getWords(id: string){
    return this.db.words.findMany({
      where: { category_id: +id }
    })
  }

  getTest(id: string) {
    // const lang = type == 'am-en' ? 'am' : 'en';
    return this.db.$queryRaw
      `SELECT id, word_am AS word FROM words 
       WHERE category_id = ${id}
       ORDER BY RAND();`;
  }

  getCurrentTranslation(id: number){
    return this.db.words.findUnique({where: { id }})
  }
  
}
