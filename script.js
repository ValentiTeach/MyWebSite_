// Проста імітація логіки авторизації
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const userDisplay = document.getElementById('user-display');
const errorMsg = document.getElementById('error-msg');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Спрощена перевірка (логін admin, пароль 1234)
    if (user === 'admin' && pass === '1234') {
        loginScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        userDisplay.innerText = user;
    } else {
        errorMsg.innerText = "Неправильний логін або пароль!";
    }
});

// Функція для зміни розділів
function showSection(sectionId) {
    // Приховуємо всі секції
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    // Показуємо потрібну
    document.getElementById(sectionId).classList.remove('hidden');
}

// Вихід
function logout() {
    mainContent.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    loginForm.reset();
}
