
    const correctAnswers = {
        "baston1": "1", // Question 1, correct answer: option 1
        "baston2": "4", // Question 2, correct answer: option 4
        "baston3": "3", // Question 3, correct answer: option 3
        "baston4": "3"  // Question 4, correct answer: option 3
    };

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Collect user's answers
        let userAnswers = {
            "baston1": document.querySelector('input[name="baston1"]:checked')?.value,
            "baston2": document.querySelector('input[name="baston2"]:checked')?.value,
            "baston3": document.querySelector('input[name="baston3"]:checked')?.value,
            "baston4": document.querySelector('input[name="baston4"]:checked')?.value
        };

        let resultMessage = "<h2>Resultados:</h2><ul>";

        // Compare each user answer with the correct one
        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const userAnswer = userAnswers[question];
            if (userAnswer === correctAnswer) {
                resultMessage += `<li>Pregunta ${question.slice(-1)}: <span style="color:green;">Correcta</span></li>`;
            } else {
                resultMessage += `<li>Pregunta ${question.slice(-1)}: <span style="color:red;">Incorrecta</span></li>`;
            }
        }

        resultMessage += "</ul>";
        document.getElementById("resultados").innerHTML = resultMessage;

        // Display the results
        const resultContainer = document.createElement('div');
        resultContainer.innerHTML = resultMessage;
        document.body.appendChild(resultContainer);
    });

