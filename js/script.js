let btns = document.querySelectorAll(".btn");
let btns2 = document.querySelectorAll(".btn2");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Спочатку знімемо клас active з усіх кнопок
    btns.forEach((b) => {
      b.classList.remove("active");
    });

    // Додамо клас active лише до натиснутої кнопки
    btn.classList.add("active");
  });
});

btns2.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Спочатку знімемо клас active з усіх кнопок
    btns2.forEach((b) => {
      b.classList.remove("active");
    });

    // Додамо клас active лише до натиснутої кнопки
    btn.classList.add("active");
  });
});

/* Burger menu */

let btnMenu = document.getElementById("nav-icon3");
let menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* == Mousemove main section == */

document.addEventListener("mousemove", emoticon);

function emoticon(e) {
  this.querySelectorAll(".move").forEach((move) => {
    const speed = move.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

/* Animation burger button */

document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(
    "#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4"
  );

  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});

/* Функція для друку тексту по буквах */
/* Функція для друку тексту по буквах */
function typeWriter(element, text, delay) {
  let index = 0;

  function type() {
    if (index < text.length) {
      // Додаємо одну букву
      element.innerHTML += text.charAt(index).replace(/\n/g, "<br>"); // Замінюємо \n на <br>
      index++;
      setTimeout(type, delay); // Затримка перед наступною буквою
    }
  }

  type(); // Запускаємо функцію
}

// Знаходимо елемент
const titleElement = document.querySelector(".main__title");

// Викликаємо функцію з текстом та затримкою
typeWriter(titleElement, `Grow up your sells\nwith us.`, 100);
// Використовуємо \n для переносу рядка
