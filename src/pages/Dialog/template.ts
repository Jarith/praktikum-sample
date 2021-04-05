export const template = (ChatList: string, Avatar: string, ProfileActions: string, ChatActions: string, MessageInput: string, Button: string) => `
<div class="chat-container">
    <aside>
      ${ChatList}
    </aside>
    <div class="dialog">
      <header class="dialog__header">
        ${Avatar}
        <h1 class="dialog__title">{{chatName}}</h1>
        ${ProfileActions}
      </header>
      <main class="daily-chat-container">
        {% for dailyChat in DailyChats %}
          {{dailyChat}}
        {% endfor %}
        <form class="send-message-container">
          ${ChatActions}
          <div class="send-message">
            ${MessageInput}
          </div>
          ${Button}
        </form>
      </main>
    </div>
  </div>
`;
