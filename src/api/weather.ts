import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export class GetWeather {
  constructor(private httpService: HttpService) {}

  async dataWeather(lat: number, lon: number): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.KEY_OPENWEATHER}`;

    const response = await firstValueFrom(this.httpService.get(url));

    return response.data.main.temp;
  }
}
