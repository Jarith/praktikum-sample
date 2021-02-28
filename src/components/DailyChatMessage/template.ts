export const template = `
    <div class="daily-chat__message chat-message{% if me %} daily-chat__message--me chat-message--me{% endif %}">
      {% if Image %}
        {{Image}}
      {% else %}
        <p class="chat-message__content">{{text}}</p>
      {% endif %}
      <time class="chat-message__time{% if Image %} chat-message__time--img{% endif %}{% if me %} chat-message__time--me{% endif %}">{{message.time}}</time>
    </div>
`;