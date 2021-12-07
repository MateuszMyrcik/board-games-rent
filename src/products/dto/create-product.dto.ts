export class CreateProductDto {
  id: string;
  designer: string;
  playersNumb: {
    from: number;
    to: number;
  };
  suggestAge: number;
  playTime: {
    from: number;
    to: number;
  };
  prize: number;
  reservation: number;
  image: string;
  title: string;
  category: string;
  difficultyLevel: number;
  body: string;
}
