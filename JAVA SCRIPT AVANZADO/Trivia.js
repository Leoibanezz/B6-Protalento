let questions = []; 
let currentQuestionIndex = 0; 
let score = 0; 

// Funcion para cargar preguntas Faciles de una api externa
async function fetchTriviaQuestions(difficulty, category, type) {
    const lang = 'es';
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        questions = data.results;
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
    } catch (error) {
        console.error('Error al obtener preguntas:', error);
    }
}

//Funcion para cargar pregutas de dificultad media de api
async function fetchMediumDifficultyTriviaQuestions(category, type) {
    const lang = 'es'; 
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=21&difficulty=medium`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        questions = data.results;
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
    } catch (error) {
        console.error('Error al obtener preguntas de dificultad media:', error);
    }
}

async function fetchHardDifficultyTriviaQuestions(category, type) {
    const lang = 'es'; 
    const apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=hard&category=${category}&type=${type}&lang=${lang}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        questions = data.results;
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
    } catch (error) {
        console.error('Error al obtener preguntas de dificultad difícil:', error);
    }
}

// Funcion para cargar preguntas de dificultad Dificil de una API
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const triviaContainer = document.getElementById('trivia-container');
        triviaContainer.innerHTML = `
            <h2>Pregunta ${currentQuestionIndex + 1}:</h2>
            <p>${currentQuestion.question}</p>
            <ul>
                ${currentQuestion.incorrect_answers.map(answer => `
                    <li>
                        <button onclick="checkAnswer(false)">${answer}</button>
                    </li>
                `).join('')}
                <li>
                    <button onclick="checkAnswer(true)">${currentQuestion.correct_answer}</button>
                </li>
            </ul>
        `;
    } else {
        
        showFinalScore();
    }
}

// Función de respuesta
function checkAnswer(isCorrect) {
    if (isCorrect) {
        score += 100; // Suma 100 puntos por respuesta correcta
    }
    currentQuestionIndex++;
    displayQuestion();
}

// Función para mostrar el puntaje 
function showFinalScore() {
    const triviaContainer = document.getElementById('trivia-container');
    triviaContainer.innerHTML = `
        <h2>Puntaje Final:</h2>
        <p>Tu puntaje es: ${score}</p>
    `;
    document.getElementById('score').textContent = score;
}

// Evento para cargar una nueva trivia al hacer clic en el botón "Nueva Trivia (Fácil)"
document.getElementById('new-trivia-easy-btn').addEventListener('click', () => {
    const category = ''; 
    const type = '';     
    fetchTriviaQuestions('easy', category, type);
});

// Evento para cargar una nueva trivia al hacer clic en el botón "Nueva Trivia (Media)"
document.getElementById('new-trivia-medium-btn').addEventListener('click', () => {
    const category = ''; 
    const type = '';     
    fetchMediumDifficultyTriviaQuestions(category, type);
});
// Evento para cargar una nueva trivia al hacer clic en el botón "Nueva Trivia (Dificil)"
document.getElementById('new-trivia-hard-btn').addEventListener('click', () => {
    const category = ''; 
    const type = '';     
    fetchHardDifficultyTriviaQuestions(category, type);
});

fetchTriviaQuestions('', '', '');






