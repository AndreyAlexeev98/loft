ymaps.ready(init);

// create placemarks, пока что в ручную
let placemarks = [
    {
        latitude: '59.97',
        longitude: '30.31',
        hintContent: '<div>this is hint</div>',
        balloonContent: [
            '<form class="form form-map" action="#">',
            '<h4 class="form__title">Отзыв:</h4>',
            '<input class="form__input" name="name" type="text" placeholder="Укажите ваше имя">',
            '<input class="form__input" name="place" type="text" placeholder="Укажите место">',
            '<textarea name="review" id="reviews-id" class="form__textarea" placeholder="Оставить отзыв"></textarea>',
            '<div class="form__btn"><button class="btn" type="submit">Добавить</button></div>',
            '</form>'
        ]
    },
    {
        latitude: '59.96',
        longitude: '30.32',
        hintContent: '<div>this is hint</div>',
        balloonContent: [
            '<div class="className">This is</div>',
            '<div>balloon</div>',
            '<div>placemarks2</div>'
        ]
    },
    {
        latitude: '59.95',
        longitude: '30.33',
        hintContent: '<div>this is hint</div>',
        balloonContent: [
            '<div class="className">This is</div>',
            '<div>balloon</div>',
            '<div>placemarks3</div>'
        ]
    }
],
    geoObjects = [];

// параметры карты
function init() {
    let map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: [ 'default', 'zoomControl', 'searchControl'],
    });

// каждому placemark добавляем хинт и балун

    for ( let i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
            hintContent: placemarks[i].hintContent,
            balloonContent: placemarks[i].balloonContent.join('')
        });
    }

// добавил кластеризацию
    
    let clusterer = new ymaps.Clusterer({});
    
    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);

// кастомная кнопка
    var button = new ymaps.control.Button({
        data: {
            image: '2.jpg',
            content: 'Розыск питомцев',
            title: 'Кликни'
        },
        options: {
            selectOnClick: false,
            maxWidth: [30, 100, 150]
        }
    });
    map.controls.add(button, { float: 'right', floatIndex: 100 });

    // 

        

// открываем форму по клику

    map.events.add('click', function (e) {
        if (!map.balloon.isOpen()) {
            var coords = e.get('coords');
            map.balloon.open(coords, {
                contentBody: '<form class="form form-map" action="#">' +
                '<h4 class="form__title">Отзыв:</h4>' +
                '<input class="form__input" data-role="input-name" name="name" type="text" placeholder="Укажите ваше имя">' +
                '<input class="form__input" data-role="input-place" name="place" type="text" placeholder="Укажите место">'+
                '<textarea name="review" data-role="input-textarea" id="reviews-id" class="form__textarea" placeholder="Оставить отзыв"></textarea>' +
                '<div class="form__btn"><button data-role="add-review" class="btn" type="submit">Добавить</button></div>' +
                '</form>' 
            });
        }
        else {
            myMap.balloon.close();
        }
      
    });

    map.events.add('click', function (e) {
        if (e.target.dataset.role === "add-review") {
            alert('ok');
        }
    })
    
}











  