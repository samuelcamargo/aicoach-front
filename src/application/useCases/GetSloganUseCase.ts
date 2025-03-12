import { SloganEntity } from '@/domain/entities/SloganEntity';

export class GetSloganUseCase {
  execute(): SloganEntity {
    return {
      mainText: 'AiCoach',
      subText: 'em breve'
    };
  }
} 