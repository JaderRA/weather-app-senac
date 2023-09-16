const stars = document.querySelectorAll(".star");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");
let userRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-rating"));
    if (rating === userRating) {
      userRating = 0;
    } else {
      userRating = rating;
    }
    highlightStars(userRating);
  });

  star.addEventListener("mouseover", () => {
    highlightStarsOnHover(index);
  });

  star.addEventListener("mouseout", () => {
    resetStarsOnHover(index);
  });
});

function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

function highlightStarsOnHover(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("hovered");
    }
  });
}

function resetStarsOnHover(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.remove("hovered");
    }
  });
}

submitButton.addEventListener("click", () => {
  result.classList.add("result");
  const message = document.getElementById("feedback-textarea").value;
  const emailSubject = "Feedback do Usuário";

  setTimeout(() => {
    result.classList.remove("result");
  }, 4000);

  result.innerHTML = `Você nos classificou com ${userRating} estrelas. Agradecemos o seu feedback!`;

  const mailtoLink = `mailto:exemplo@exemplo.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(message)}`;

  if (message) {
    window.location.href = mailtoLink;
  }
});
