import initMap from './initMap';

export default class GeoReview {
  constructor() {
    this.formTemplate = document.querySelector('#addFormTemplate').innerHTML;
    this.map = new initMap('map', this.onClick.bind(this));
    this.map.init().then(this.onInit.bind(this));
  }

    async onInit() {  
    localStorage.setItem('data', JSON.stringify(data));
    for (const item of data) {
      for (let i = 0; i < item.total; i++) {
        this.map.createPlacemark(item.coords);
      }
    }
    document.body.addEventListener('click', this.onDocumentClick.bind(this));
  }


  createForm(coords, reviews) {
    const root = document.createElement('div');
    root.innerHTML = this.formTemplate;
    const reviewList = root.querySelector('.reviews');
    const reviewForm = root.querySelector('[data-role=review-form]');
    reviewForm.dataset.coords = JSON.stringify(coords);

    for(const item of reviews) {
      const div = document.createElement('div');
      div.classList.add('review-item');
      div.innerHTML = `
        <div><b>${item.name}</b> [${item.place}]</div>
        <div>${item.text}</div>
      `;
        reviewList.appendChild(div);
    }

    return(root);
  }

  async onClick(coords) {
    var list = JSON.parse(localStorage.getItem('data'));
    const form = this.createForm(coords, list);
    this.map.openBalloon(form.innerHTML);
  }

  async onDocumentClick(e) {
    if (e.target.dataset.role === 'review-add') {
      const reviewForm = document.querySelector('[data-role=review-form]');
      const coords = JSON.parse(reviewForm.dataset.coords);
      const data = {
        coords,
        review: {
          name: document.querySelector('[data-role=review-name]').nodeValue,
          place: document.querySelector('[data-role=review-place]').nodeValue,
          text: document.querySelector('[data-role=review-text]').nodeValue,
        },
      };
      try {
        list.push({coords:review.name, place: review.place, review: review.text});  
        this.map.createPlacemark(coords);
        this.map.closeBalloon();
      } catch (e) {
        const formError = document.querySelector('.form__error')
      }
    }
  }
}