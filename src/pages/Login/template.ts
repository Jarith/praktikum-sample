export const template = (EmailInput: string, PasswordInput: string, Button: string, Link: string) => `
  <main class="auth">
    <h1 class="auth__title">{{title}}</h1>
      <form class="auth-form">
        ${EmailInput}
        ${PasswordInput}
        ${Button}
        ${Link}
      </form>
  </main>
`;
