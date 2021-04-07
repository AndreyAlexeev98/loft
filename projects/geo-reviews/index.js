import './index.html';
import GeoReview from './GeoReview';

new GeoReview();


// ymaps.ready(init);

// let placemarks = [
//     {
//         latitude: '59.97',
//         longitude: '30.31',
//         hintContent: '<div>this is hint</div>',
//         balloonContent: [
//             '<form class="form form-map" action="#">',
//             '<h4 class="form__title">Отзыв:</h4>',
//             '<input class="form__input" name="name" type="text" placeholder="Укажите ваше имя">',
//             '<input class="form__input" name="place" type="text" placeholder="Укажите место">',
//             '<textarea name="review" id="reviews-id" class="form__textarea" placeholder="Оставить отзыв"></textarea>',
//             '<div class="form__btn"><button class="btn" type="submit">Добавить</button></div>',
//             '</form>'
//         ]
//     },
//     {
//         latitude: '59.96',
//         longitude: '30.32',
//         hintContent: '<div>this is hint</div>',
//         balloonContent: [
//             '<div class="className">This is</div>',
//             '<div>balloon</div>',
//             '<div>placemarks2</div>'
//         ]
//     },
//     {
//         latitude: '59.95',
//         longitude: '30.33',
//         hintContent: '<div>this is hint</div>',
//         balloonContent: [
//             '<div class="className">This is</div>',
//             '<div>balloon</div>',
//             '<div>placemarks3</div>'
//         ]
//     }
// ],
//     geoObjects = [];

// function init() {
//     let map = new ymaps.Map('map', {
//         center: [59.94, 30.32],
//         zoom: 12,
//         controls: [ 'default', 'zoomControl', 'searchControl'],
//         behaviors: ['drag']
//     });

    

//     for ( let i = 0; i < placemarks.length; i++) {
//         geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
//             hintContent: placemarks[i].hintContent,
//             balloonContent: placemarks[i].balloonContent.join('')
//         });
//     }
    
//     let clusterer = new ymaps.Clusterer({});
    
//     map.geoObjects.add(clusterer);
//     clusterer.add(geoObjects);
//     map.controls.remove('zoomControl');
//     map.controls.remove('rulerControl');


//     var button = new ymaps.control.Button({
//         data: {
//             image: '2.jpg',
//             content: 'Розыск питомцев',
//             title: 'Кликни'
//         },
//         options: {
//             selectOnClick: false,
//             maxWidth: [30, 100, 150]
//         }
// });
// map.controls.add(button, { float: 'right', floatIndex: 100 });
    
// }






  