document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.querySelector('.reviews');

  if (!reviewsContainer) {
    console.error("Не найден элемент с классом 'reviews'.");
    return;
  }

  const attractionId = new URLSearchParams(window.location.search).get('id');

  if (!attractionId) {
    console.error("ID достопримечательности отсутствует в URL.");
    return;
  }

  const reviewsTitle = document.createElement('h2');
  reviewsTitle.className = 'reviews__title';
  reviewsTitle.textContent = 'Отзывы';

  reviewsContainer.append(reviewsTitle);

  const createReviewForm = () => {
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
    commentInput.className = 'review-form__textarea';
    commentInput.placeholder = 'Введите комментарий';
    commentInput.required = true;
    emailInput.className = 'review-form__input';
    emailInput.type = 'email';
    emailInput.placeholder = 'Введите email';
    emailInput.required = true;
    submitButton.className = 'review-form__submit';
    submitButton.type = 'submit';
    submitButton.textContent = 'Отправить';

    form.append(nameInput, commentInput, emailInput, submitButton);

    form.addEventListener('submit', (event) => handleReviewSubmit(event));

    return form;
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const nameInput = form.querySelector('.review-form__input[type="text"]');
    const commentInput = form.querySelector('.review-form__textarea');
    const emailInput = form.querySelector('.review-form__input[type="email"]');

    const review = {
      name: nameInput.value,
      comment: commentInput.value,
      email: emailInput.value,
      attractionId,
    };

    fetch('https://6734e04a5995834c8a9132b6.mockapi.io/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((newReview) => {
        const reviewElement = createReviewElement(newReview);
        reviewsContainer.querySelector('.reviews__list').append(reviewElement);
        nameInput.value = '';
        commentInput.value = '';
        emailInput.value = '';
      })
      .catch((error) => console.error('Ошибка при добавлении отзыва:', error));
  };

  const createReviewElement = (review) => {
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
    deleteButton.textContent = 'Удалить';

    deleteButton.addEventListener('click', () => {
      const reviewId = review.id;
      fetch(`https://6734e04a5995834c8a9132b6.mockapi.io/reviews/${reviewId}`, {
        method: 'DELETE',
      })
        .then(() => {
          reviewBlock.remove();
        })
        .catch((error) => console.error('Ошибка при удалении отзыва:', error));
    });

    reviewBlock.append(reviewerName, reviewComment, deleteButton);

    return reviewBlock;
  };

  const loadReviews = () => {
    fetch('https://6734e04a5995834c8a9132b6.mockapi.io/reviews')
      .then((response) => response.json())
      .then((reviews) => {
        const filteredReviews = reviews.filter(review => review.attractionId === attractionId);

        const reviewsList = document.createElement('div');
        reviewsList.className = 'reviews__list';

        filteredReviews.forEach((review) => {
          const reviewElement = createReviewElement(review);
          reviewsList.append(reviewElement);
        });

        reviewsContainer.append(reviewsList);
      })
      .catch((error) => console.error('Ошибка при загрузке отзывов:', error));
  };

  const reviewForm = createReviewForm();
  reviewsContainer.append(reviewForm);

  loadReviews();
});