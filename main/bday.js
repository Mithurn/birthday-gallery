function startTyping() {
    const messages = [
        "OMFG IT IS MY FAVOURITE GIRL'S 18TH BIRTHDAYYYYYYYYYY!!!! ",
        "HAHA YOU WOULD'VE NEVER GUESSED THAT WOULD YOU ? ",
        "WELLL HMMMM OK THEN NOW GO ON CLICK THAT BUTTON"
    ];

    const messageContainer = document.getElementById('message');
    const introButton = document.getElementById('introButton');
    
    // Hide the button
    introButton.style.display = 'none';

    function typeWriter(message, callback) {
        let charIndex = 0;

        function type() {
            if (charIndex < message.length) {
                const span = document.createElement('span');
                span.textContent = message.charAt(charIndex);
                messageContainer.appendChild(span);

                charIndex++;
                setTimeout(type, 80 + Math.random() * 40);
            } else if (callback) {
                setTimeout(callback, 1000);
            }
        }

        type();
    }

    function displayMessages(messages, current = 0) {
        if (current < messages.length) {
            messageContainer.style.opacity = '0';
            setTimeout(() => {
                messageContainer.textContent = ''; // Clear old message
                messageContainer.style.opacity = '1';
                typeWriter(messages[current], () => displayMessages(messages, current + 1));
            }, 500);
        } else {
            // After all messages, create a new "smackable" button
            const button = document.createElement('button');
            button.textContent = "HMM THIS BUTT  ON LOOKS REALLY SMACKABLE RN";
            button.classList.add('action-button');
            messageContainer.appendChild(button);

            // Redirect to gallery on click
            button.addEventListener('click', function () {
                window.location.href = '../gallery/gallery.html'; // Adjust the path if necessary
            });
        }
    }

    displayMessages(messages);
}
