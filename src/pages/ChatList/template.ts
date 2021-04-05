export const template = (ChatList: string) => `
    <aside>
      ${ChatList}
    </aside>
    <main class="select-chat">
      <h1 class="select-chat__message">{{title}}</h1>
    </main>
`;
