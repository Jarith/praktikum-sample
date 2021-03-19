export const template = `
  <div class="chat-list-container">
    <div>
      {{ProfileLink}}
      <form>
        {{SearchInput}}
      </form>
    </div>
    <ul class="chat-list">
      {% for chat in Chats %}
        {{chat}}
      {% endfor %}
    </ul>
  </div>
`;