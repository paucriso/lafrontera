import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  appetizers = [
    {name: 'Nachos con cualquier carne', price: '$15'},
    {name: 'Guacamole', price: 'S:$13 L:$18'},
    {name: 'Mini Taquitos', price: '5x $15'},
    {name: 'Cocktail de Camarones', price: 'S:$18 L:$25'},
    {name: 'Mini Quesadillas de Birria', price: '5x $18'},
    {name: 'Ensalada La Frontera', price: 'S:$9 L:$13'}
  ];

  tacos = [
    {name: 'Pollo/Grilled chicken', price: '3x $12'},
    {name: 'Carne Enchilada/Spicy pork', price: '3x $12'},
    {name: 'Carnitas/Roast pork', price: '3x $12'},
    {name: 'Al Pastor/Marinated pork', price: '3x $12'},
    {name: 'Chorizo/Mexican sausage', price: '3x $12'},
    {name: 'Oreja', price: '3x $12'},
    {name: 'Tripa', price: '3x $15'},
    {name: 'Cecina/Salty beef', price: '3x $15'},
    {name: 'Bistek/Grilled steak', price: '3x $15'},
    {name: 'Lengua/Beef tongue', price: '3x $15'},
    {name: 'Barbacoa', price: '3x $15'},
    {name: 'Shrimp', price: '3x $15'},
    {name: 'Chapulines', price: '3x $15'},
    {name: 'Tacos Placeros', price: '2x $12', extra: '(Tortillas hechas a mano, Arroz, Chile Poblano, Huevo hervido, rajas con epazote de milanesa de pollo o de res)'}
  ];

  tortas = [
    {name: 'La Frontera', price: '$13', extra: '(bistec, carnitas, chorizo, huevo estrellado, lechuga, aguacate, cebolla y chile)'},
    {name: 'Carne Enchilada', price: '$10'},
    {name: 'Cecina', price: '$10'},
    {name: 'Milanesa de Res', price: '$10'},
    {name: 'Milanesa de Pollo', price: '$10'},
    {name: 'Pollo a la Plancha', price: '$10'},
    {name: 'Carnitas', price: '$10'},
    {name: 'Chorizo', price: '$10'},
    {name: 'Oreja', price: '$10'},
    {name: 'Lengua', price: '$12'},
    {name: 'Tripa', price: '$12'}
  ];

  quesadillas = [
    {name: 'Pollo/Grilled chicken', price: '$15'},
    {name: 'Bistek/Grilled steak', price: '$15'},
    {name: 'Carne Enchilada/Spicy pork', price: '$15'},
    {name: 'Cecina/Salty beef', price: '$15'},
    {name: 'Tinga/Chipotle chicken', price: '$15'},
    {name: 'Chorizo/Mexican sausage', price: '$15'},
    {name: 'Tripa', price: '$15'},
    {name: 'Lengua/Beef tongue', price: '$15'},
    {name: 'Flor de Calabaza', price: '$15'},
    {name: 'Huitlacoche', price: '$15'},
    {name: 'Champiñones/Mushroom', price: '$15'},
    {name: 'Chicharrón/ Pork skin', price: '$15'}
  ];

  tostadas = [
    {name: 'Pollo/Grilled chicken', price: '$5'},
    {name: 'Bistek/Grilled steak', price: '$5'},
    {name: 'Carne Enchilada/Spicy pork', price: '$5'},
    {name: 'Cecina/Salty beef', price: '$5'},
    {name: 'Tinga/Chipotle chicken', price: '$5'},
    {name: 'Carnitas', price: '$5'},
    {name: 'Al Pastor/Marinated pork', price: '$5'},
    {name: 'Lengua/Beef tongue', price: '$5'},
    {name: 'Chorizo/Mexican sausage', price: '$5'},
    {name: 'Tripa', price: '$5'}
  ];

  burritos = [
    {name: 'Pollo/Grilled chicken', price: '$12'},
    {name: 'Carne Enchilada/Spicy pork', price: '$12'},
    {name: 'Carnitas/Roast pork', price: '$12'},
    {name: 'Al Pastor/Marinated pork', price: '$12'},
    {name: 'Chorizo/Mexican sausage', price: '$12'},
    {name: 'Oreja/Ear', price: '$12'},
    {name: 'Cecina/Salty beef', price: '$12'},
    {name: 'Lengua/Beef tongue', price: '$12'},
    {name: 'Tripa', price: '$12'},
  ];

  sopes = [
    {name: 'Pollo/Grilled chicken', price: '$5'},
    {name: 'Bistek/Grilled steak', price: '$5'},
    {name: 'Carne Enchilada/Spicy pork', price: '$5'},
    {name: 'Cecina/Salty beef', price: '$5'},
    {name: 'Tinga/Chipotle chicken', price: '$5'},
    {name: 'Carnitas/Roast pork', price: '$5'},
    {name: 'Al Pastor/Marinated pork', price: '$5'},
    {name: 'Lengua/Beef tongue', price: '$5'},
    {name: 'Chorizo', price: '$5'},
    {name: 'Oreja', price: '$5'}
  ];

  platillos = [
    {name: 'Enchiladas', price: '$17', extra: '(Verdes, Rojas o Mole)'},
    {name: 'Chilaquiles', price: '$15', extra: '(Verdes o Rojos)'},
    {name: 'Mole Poblano', price: '$19', extra: '(con arroz, frijoles y tortillas)'},
    {name: 'Camarones a La Mexicana', price: '$23'},
    {name: 'Camarones a La Diabla', price: '$23'},
    {name: 'Bistek a La Mexicana', price: '$22'},
    {name: 'Bistek Encebollado', price: '$21'},
    {name: 'Ribeye estilo La Frontera', price: '$40'},
    {name: 'Molcajete La Frontera', price: '$40', extra: '(arroz, frijoles, chorizo, cecina, carne enchilada, pollo y salsa de casa)'},
    {name: 'Plato de Cecina', price: '$21'},
    {name: 'Plato de Carne Enchilada', price: '$21'},
    {name: 'Flautas', price: '5x $15', extra: '(Queso, Chorizo o Pollo)'}
  ];

  caldos = [
    {name: 'Pancita de Res', price: '$15'},
    {name: 'Pozole', price: '$15'},
    {name: 'Caldo de Pollo', price: '$15'},
    {name: 'Chilate de Pollo', price: '$15'},
    {name: 'Conzomé de Borrego', price: '$15'},
    {name: 'Mole de Olla', price: '$18'}
  ];

  sideOrders = [
    {name: 'Arroz', price: '$5'},
    {name: 'Frijoles', price: '$5'},
    {name: 'French Fries', price: '$5'},
    {name: 'Nopales', price: '$5'},
    {name: 'Cebollines', price: '$5'},
    {name: 'Crema', price: '$3'},
    {name: 'Guacamole', price: '$3'}
  ];

  mainSlider = [
    {imgUrl: 'assets/slide1.jpg', imgName: 'Slide1'},
    {imgUrl: './assets/slide2.jpg', imgName: 'Slide2'},
    {imgUrl: 'assets/slide3.jpg', imgName: 'Slide3'},
    {imgUrl: 'assets/slide4.jpg', imgName: 'Slide4'},
    {imgUrl: 'assets/slide5.jpg', imgName: 'Slide5'},
    {imgUrl: 'assets/slide6.jpg', imgName: 'Slide6'},
    {imgUrl: 'assets/slide7.jpg', imgName: 'Slide7'},
    {imgUrl: 'assets/slide8.jpg', imgName: 'Slide8'},
    {imgUrl: 'assets/slide9.jpg', imgName: 'Slide9'},
    {imgUrl: 'assets/slide10.jpg', imgName: 'Slide10'},
    {imgUrl: 'assets/slide11.jpg', imgName: 'Slide11'},
    {imgUrl: 'assets/slide12.jpg', imgName: 'Slide12'},
    {imgUrl: 'assets/slide13.jpg', imgName: 'Slide13'},
  ];

  

  constructor() { }
}
