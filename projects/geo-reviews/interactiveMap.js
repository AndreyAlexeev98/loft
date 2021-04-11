export default class interactiveMap {
  constructor (mapId, onClick) {
    this.formTemplate = document.querySelector('#addFormTemplate').innerHTML;
    this.mapId = mapId;
    this.onClick = onClick;
  }
  async init() {
    await this.injectYMapsScript();
    await this.loadYMaps();
    this.initMap();
  } 

  injectYMapsScript() {
    return new Promise((resolve) => {
      const ymapsScript = document.createElement('script');
      ymapsScript.src = "https://api-maps.yandex.ru/2.1/?apikey=487625d5-ed4f-4c67-9e4a-e1754976483c&lang=ru_RU";
      document.body.appendChild(ymapsScript);
      ymapsScript.addEventListener('load', resolve);
    });
  }

  loadYMaps() {
    return new Promise((resolve) => ymaps.ready(resolve));
  }

  initMap() {
    this.clusterer = new ymaps.Clusterer({
      groupByCoordinates: true,
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: false,
    });
    this.clusterer.events.add('click', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      this.onClick(coords);
    });
    this.map = new ymaps.Map(this.mapId, {
      center: [51.730251, 36.221269],
      zoom: 12,
    });
    this.map.events.add('click', (e) => this.onClick(e.get('coords')));
    this.map.geoObjects.add(this.clusterer);
  }

  openBalloon(coords, content) {
    this.map.balloon.open(coords, content);
  }

  setBalloonContent(content) {
    this.map.balloon.setData(content);
  }

  closeBalloon() {
    this.map.balloon.close();
  }

}