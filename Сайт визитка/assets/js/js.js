/* Это объявление переменной, мы наши кнопку по тегу */

function buttonCredo(){
alert('Мое кредо - Хорошо там где мы есть, где нас нет там плохо! Но ничего, я и туда доберусь!');
}
function buttonClicked()
{
let map = [null,'water','water','water','water','water','water','water','water']; //Объявляем массив с картой боя
var localship = Math.floor(Math.random() * 7)+1;
map[localship] = 'ship';
map[localship+1] = 'ship'; //Выводим корабль на карту
var shiplife = 2;
var shot =7;
var shotamount = 0;
//alert (localship); ------------Подсказка
while (shiplife > 0) 
    {
        shot = prompt('Привет ! Это игра морской бой, у нас 8 клеток и один двухпалубный корабль. Куда стрелять капитан? (Для выхода введите "400") Введи число от 1 до 8):'); //Вводим выстрел
        if (shot == 400)
        break
        else
        if (shot < 1 || shot >8 )
           {
            alert ('Вы ввели не валидное значение, попробуйте поле от 1 до 8');
           } 
        else 
            {
            switch (map[shot])      
                {
                case 'Пусто':
                    alert ('Вы стреляли сюда. map[shot]'); 
                    break;      //Попал в отстрелл
                case 'Корабль горит' :                           //Попал в отстрелл
                    alert ('Вы стреляли сюда. map[shot]');
                    break; 
                case 'water':                  
                    map[shot] = 'Пусто';                         //Попал в воду    
                    shotamount = shotamount +1;
                    alert ('Пусто!');
                    break; 
                case 'ship':
                    map[shot] = 'Корабль горит';
                    shotamount = shotamount +1;
                    alert ('Попал! Корабль горит!');
                    shiplife = shiplife-1;
                    break; 
                }  
            }
    }

switch (shotamount)
    {
    case 2 :
        alert ("Поздравляем! Ваша фамилия случайно не Ушаков? :)") ;    
        break;
    case 3 : 
        alert ("Поздравляем! Вы практически адмирал! :) " );     
        break;
    case 4 : 
    case 5 :
    case 6 : 
    case 7 :
    case 8 :

        alert ("Спецоперация окончена. Возьмите на полке пирожок. ");       
        break; 
    } 


}

const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() 

{
alert('Хорошо там где мы есть, где нас нет там плохо! Но ничего, я и туда доберусь!');
});


