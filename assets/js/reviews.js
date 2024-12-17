class ReviewSection {
  constructor(containerSelector, apiUrl) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.error(`Не найден элемент с классом '${containerSelector}'.`);
      return;
    }

    this.apiUrl = apiUrl;
    this.attractionId = new URLSearchParams(window.location.search).get('id');
    if (!this.attractionId) {
      console.error("ID достопримечательности отсутствует в URL.");
      return;
    }

    const reviewsTitle = this.createReviewsTitle();
    this.container.append(reviewsTitle);

    const reviewForm = this.createReviewForm();
    this.container.append(reviewForm);

    this.loadReviews();
  }

  createReviewsTitle() {
    const reviewsTitle = document.createElement('h2');
    reviewsTitle.className = 'reviews__title';
    reviewsTitle.textContent = 'Отзывы';
    return reviewsTitle;
  }

  createReviewForm() {
    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    const commentInput = document.createElement('textarea');
    const emailInput = document.createElement('input');
    const submitButton = document.createElement('button');

    form.className = 'review-form';
    nameInput.className = 'review-form__input';
    nameInput.type = 'text';
    nameInput.placeholder = 'Введите имя';
    nameInput.required = true;
    nameInput.maxLength = 12;

    commentInput.className = 'review-form__textarea';
    commentInput.placeholder = 'Введите комментарий';
    commentInput.required = true;
    commentInput.maxLength = 150;

    emailInput.className = 'review-form__input';
    emailInput.type = 'email';
    emailInput.placeholder = 'Введите email';
    emailInput.required = true;

    submitButton.className = 'review-form__submit';
    submitButton.type = 'submit';
    submitButton.textContent = 'Отправить';

    form.append(nameInput, commentInput, emailInput, submitButton);

    form.addEventListener('submit', (event) => this.handleReviewSubmit(event));

    return form;
  }

  handleReviewSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const nameInput = form.querySelector('.review-form__input[type="text"]');
    const commentInput = form.querySelector('.review-form__textarea');
    const emailInput = form.querySelector('.review-form__input[type="email"]');

    const review = {
      name: nameInput.value,
      comment: commentInput.value,
      email: emailInput.value,
      attractionId: this.attractionId,
    };

    fetch(`${this.apiUrl}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((newReview) => {
        const reviewElement = this.createReviewElement(newReview);
        this.container.querySelector('.reviews__list').append(reviewElement);
        nameInput.value = '';
        commentInput.value = '';
        emailInput.value = '';
      })
      .catch((error) => console.error('Ошибка при добавлении отзыва:', error));
  }

  createReviewElement(review) {
    const reviewBlock = document.createElement('div');
    const reviewerName = document.createElement('h3');
    const reviewComment = document.createElement('p');
    const deleteButton = document.createElement('button');

    reviewBlock.className = 'review-block';
    reviewBlock.dataset.reviewId = review.id;
    reviewerName.className = 'review-block__name';
    reviewerName.textContent = review.name;
    reviewComment.className = 'review-block__comment';
    reviewComment.textContent = review.comment;
    deleteButton.className = 'review-block__delete';
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => this.handleDeleteReview(review.id, reviewBlock));

    reviewBlock.append(reviewerName, reviewComment, deleteButton);

    return reviewBlock;
  }

  handleDeleteReview(reviewId, reviewBlock) {
    fetch(`${this.apiUrl}/reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then(() => {
        reviewBlock.remove();
      })
      .catch((error) => console.error('Ошибка при удалении отзыва:', error));
  }

  loadReviews() {
    fetch(`${this.apiUrl}/reviews`)
      .then((response) => response.json())
      .then((reviews) => {
        const filteredReviews = reviews.filter(review => review.attractionId === this.attractionId);

        const reviewsList = document.createElement('div');
        reviewsList.className = 'reviews__list';

        filteredReviews.forEach((review) => {
          const reviewElement = this.createReviewElement(review);
          reviewsList.append(reviewElement);
        });

        this.container.append(reviewsList);
      })
      .catch((error) => console.error('Ошибка при загрузке отзывов:', error));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ReviewSection('.reviews', 'https://6734e04a5995834c8a9132b6.mockapi.io');
});