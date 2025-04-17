import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  userMessage = '';
  isChatOpen = false;

  botResponses: { keywords: string[]; response: string }[] = [
    { keywords: ['hello', 'hi', 'hai'], response: 'Hello! How can I assist you today?' },
    { keywords: ['how are you'], response: 'I am just a chatbot, but doing great! How about you?' },
    { keywords: ['your name'], response: 'I am Sandy virtual assistant!' },
    {
      keywords: ['who invented you', 'creator', 'made you'],
      response: 'I was created by Sandeep, a frontend developer skilled in Angular',
    },
    {
      keywords: ['education', 'study', 'qualification'],
      response: 'Sandeep holds a Bachelor\'s degree in Computer Science and Engineering.',
    },
    {
      keywords: ['project', 'current work'],
      response: 'Sandeep is currently building a Google Meet & Zoom clone with full video conferencing features using Angular, Node.js, WebRTC, and Tailwind CSS.',
    },
    {
      keywords: ['portfolio', 'projects'],
      response: 'Sandeep\'s portfolio showcases multiple frontend projects including chat apps, video conferencing tools, and face recognition systems.',
    },
    {
      keywords: ['gmail', 'email'],
      response: 'You can contact Sandeep via Gmail: b99sandeep@gmail.com',
    },
    {
      keywords: ['linkedin'],
      response: 'Here is Sandeep\'s LinkedIn: https://www.linkedin.com/in/b99sandeep',
    },
    {
      keywords: ['github', 'git'],
      response: 'Check out Sandeep\'s GitHub: https://github.com/b99sandeep',
    },
    {
      keywords: ['help'],
      response: 'Sure! You can ask me about Sandeep\'s skills, projects, or how to contact him.',
    },
    {
      keywords: ['bye', 'goodbye'],
      response: 'Goodbye! Have a great day ahead!',
    },
  ];

  submitForm() {
    const subject = encodeURIComponent('New Contact Message from ' + this.name);
    const body = encodeURIComponent(`
      Contact Details:

      Name: ${this.name}
      Email: ${this.email}
      Message: ${this.message}
    `);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=b99sandeep@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    const chatWindow = document.getElementById('chatWindow');
    const chatButton = document.getElementById('chatButton');

    if (chatWindow) {
      chatWindow.classList.toggle('hidden');
    }

    if (this.isChatOpen && chatButton) {
      chatButton.classList.remove('animate-pulse');
    }
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      const userText = this.userMessage;
      this.addMessage(userText, 'user');
      this.userMessage = '';

      setTimeout(() => {
        const botReply = this.getBotReply(userText.toLowerCase());
        this.addMessage(botReply, 'bot');
      }, 600);
    }
  }

  addMessage(message: string, sender: 'user' | 'bot') {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
      const messageDiv = document.createElement('div');
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      messageDiv.className = `flex items-end ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
      messageDiv.innerHTML = `
        <div class="max-w-xs px-4 py-2 rounded-xl shadow ${
          sender === 'user'
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }">
          <div class="text-sm">${message}</div>
          <div class="text-xs mt-1 text-right text-gray-400">${timestamp}</div>
        </div>
      `;

      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  getBotReply(userInput: string): string {
    for (const item of this.botResponses) {
      if (item.keywords.some(keyword => userInput.includes(keyword))) {
        return item.response;
      }
    }
    return 'Sorry, I don\'t have access to that info right now. Please ask something else!';
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const chatWindow = document.getElementById('chatWindow');
    const chatButton = document.getElementById('chatButton');
    if (chatWindow && chatButton) {
      if (
        !chatWindow.contains(event.target as Node) &&
        !chatButton.contains(event.target as Node)
      ) {
        chatWindow.classList.add('hidden');
        chatButton.classList.add('animate-pulse');
        this.isChatOpen = false;
      }
    }
  }

  stopEvent(event: MouseEvent) {
    event.stopPropagation();
  }
}
