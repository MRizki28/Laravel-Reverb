document.addEventListener('DOMContentLoaded', function () {
    axios.get('/chat/get-message')
        .then(response => {
            console.log(response);
            const messages = response.data.data;
            const messagesContainer = document.getElementById('messages');
            if (messages && messages.length > 0) {
                messages.forEach(message => {
                    const messageElement = document.createElement('p');
                    messageElement.innerText = message.text;
                    messagesContainer.appendChild(messageElement);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
});

window.Echo.channel('chatroom')
    .listen('.message.sent', (e) => {
        console.log('pesan terkirim', e);
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.innerText = e.message.text;
        messages.appendChild(messageElement);
    });

window.sendMessage = function () {
    const formData = new FormData();
    const messageInput = document.getElementById('messageInput');
    formData.append('text', messageInput.value);

    axios.post('/chat/send-message', formData)
        .then(response => {
            console.log(response.data);
            messageInput.value = '';
        })
        .catch(error => console.error(error));

    console.log('pesan terkirim');
};
