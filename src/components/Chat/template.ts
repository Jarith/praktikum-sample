export const template = `
  <li class="chat">
    {{Avatar}}
    <div class="chat__content">
      <h2 class="chat__title">{{title}}</h2>
      <p class="chat__message">
        {% if me %}<span class="chat__you">Вы:</span>{% endif %}
        {{lastMessage}}
      </p>
    </div>
    <div class="chat__meta">
      <time class="chat__time">{{time}}</time>
      {% if unreadCount %}
        <mark class="chat__unread-counter">{{unreadCount}}</mark>
      {% endif %}
    </div>
  </li>
`;
