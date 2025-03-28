document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');
    const userInfo = document.getElementById('userInfo');
    const usernameSpan = document.getElementById('username');

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    //massa variabler
    if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        if (loginLink && userInfo) {
            loginLink.style.display = 'none';
            userInfo.style.display = 'block';
            usernameSpan.textContent = userData.username;
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);//checkar om användarnamnen, lösenord och mejl matchar

            if (user) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                alert('Välkommen ' + user.username);
                window.location.href = 'index.html';
            } else {
                alert('Fel email eller lösenord');//om fel mejl/lösenord
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) { //checkar om lösenord matchar confirmpassword
                alert('Lösenorden matchar inte');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || []; //kollar lokala storage om användaren redan finns
            if (users.some(u => u.email === email)) {
                alert('Användaren finns redan');
                return;
            }

            users.push({ username, email, password }); //lägger till användare
            localStorage.setItem('users', JSON.stringify(users)); //konverterar datan till en json sträng för att mer effektivt spara data
            alert('Konto skapat');
            window.location.href = 'login.html';
        });
    }
});

function logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

function deleteAccount() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.filter(u => u.email !== loggedInUser.email);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        sessionStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    }
}

// Funktioner för att rätta matematikuppgifter
function checkEasyAddition() {
    const easy1 = document.getElementById('easy1').value;
    const easy2 = document.getElementById('easy2').value;
    const easy3 = document.getElementById('easy3').value;

    let correct = 0;
    if (parseInt(easy1) === 5) correct++;
    if (parseInt(easy2) === 12) correct++;
    if (parseInt(easy3) === 14) correct++;

    document.getElementById('easyResult').textContent = `Du fick ${correct} av 3 rätt!`;
}
function checkMediumAddition() {
    const medium1 = document.getElementById('medium1').value;
    const medium2 = document.getElementById('medium2').value;
    const medium3 = document.getElementById('medium3').value;

    let correct = 0;
    if (parseInt(medium1) === 23) correct++;
    if (parseInt(medium2) === 36) correct++;
    if (parseInt(medium3) === 55) correct++;

    document.getElementById('mediumResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkHardAddition() {
    const hard1 = document.getElementById('hard1').value;
    const hard2 = document.getElementById('hard2').value;
    const hard3 = document.getElementById('hard3').value;

    let correct = 0;
    if (parseInt(hard1) === 82) correct++;
    if (parseInt(hard2) === 120) correct++;
    if (parseInt(hard3) === 163) correct++;

    document.getElementById('hardResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

// Lägg till liknande funktioner för subtraktion, multiplikation och division här...
function checkMediumSubtraction() {
    const medium1 = document.getElementById('medium1').value;
    const medium2 = document.getElementById('medium2').value;
    const medium3 = document.getElementById('medium3').value;

    let correct = 0;
    if (parseInt(medium1) === 7) correct++;
    if (parseInt(medium2) === 8) correct++;
    if (parseInt(medium3) === 5) correct++;

    document.getElementById('mediumResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkHardSubtraction() {
    const hard1 = document.getElementById('hard1').value;
    const hard2 = document.getElementById('hard2').value;
    const hard3 = document.getElementById('hard3').value;

    let correct = 0;
    if (parseInt(hard1) === 8) correct++;
    if (parseInt(hard2) === 16) correct++;
    if (parseInt(hard3) === 15) correct++;

    document.getElementById('hardResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkEasyMultiplication() {
    const easy1 = document.getElementById('easy1').value;
    const easy2 = document.getElementById('easy2').value;
    const easy3 = document.getElementById('easy3').value;

    let correct = 0;
    if (parseInt(easy1) === 6) correct++;
    if (parseInt(easy2) === 20) correct++;
    if (parseInt(easy3) === 14) correct++;

    document.getElementById('easyResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkMediumMultiplication() {
    const medium1 = document.getElementById('medium1').value;
    const medium2 = document.getElementById('medium2').value;
    const medium3 = document.getElementById('medium3').value;

    let correct = 0;
    if (parseInt(medium1) === 42) correct++;
    if (parseInt(medium2) === 40) correct++;
    if (parseInt(medium3) === 36) correct++;

    document.getElementById('mediumResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkHardMultiplication() {
    const hard1 = document.getElementById('hard1').value;
    const hard2 = document.getElementById('hard2').value;
    const hard3 = document.getElementById('hard3').value;

    let correct = 0;
    if (parseInt(hard1) === 156) correct++;
    if (parseInt(hard2) === 240) correct++;
    if (parseInt(hard3) === 342) correct++;

    document.getElementById('hardResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkEasyDivision() {
    const easy1 = document.getElementById('easy1').value;
    const easy2 = document.getElementById('easy2').value;
    const easy3 = document.getElementById('easy3').value;

    let correct = 0;
    if (parseInt(easy1) === 3) correct++;
    if (parseInt(easy2) === 2) correct++;
    if (parseInt(easy3) === 2) correct++;

    document.getElementById('easyResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkMediumDivision() {
    const medium1 = document.getElementById('medium1').value;
    const medium2 = document.getElementById('medium2').value;
    const medium3 = document.getElementById('medium3').value;

    let correct = 0;
    if (parseInt(medium1) === 5) correct++;
    if (parseInt(medium2) === 11) correct++;
    if (parseInt(medium3) === 6) correct++;

    document.getElementById('mediumResult').textContent = `Du fick ${correct} av 3 rätt!`;
}

function checkHardDivision() {
    const medium1 = document.getElementById('hard1').value;
    const medium2 = document.getElementById('hard2').value;
    const medium3 = document.getElementById('hard3').value;

    let correct = 0;
    if (parseInt(hard1) === 5) correct++;
    if (parseInt(hard2) === 17) correct++;
    if (parseInt(hard3) === 89) correct++;

    document.getElementById('hardResult').textContent = `Du fick ${correct} av 3 rätt!`;
}