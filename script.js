document.getElementById('analyzeButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');

    const phishingIndicators = [
        'win a prize',
        'click here',
        'urgent',
        'verify your account',
        'bank account',
        'login',
        'update your information',
        'free',
        'risk',
        'limited time',
        'password',
        'suspicious',
        'account compromised'
    ];

    let isPhishing = false;

    phishingIndicators.forEach(indicator => {
        if (inputText.toLowerCase().includes(indicator)) {
            isPhishing = true;
        }
    });

    if (isPhishing) {
        resultDiv.innerHTML = '<p style="color: red;">Warning: This might be a phishing attempt!</p>';
    } else {
        resultDiv.innerHTML = '<p style="color: green;">This does not appear to be a phishing attempt.</p>';
    }
});
