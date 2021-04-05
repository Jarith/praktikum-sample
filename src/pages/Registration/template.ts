export const template = (EmailInput: string, FirstNameInput: string, LastNameInput: string, PhoneInput: string, PasswordInput: string, PasswordConfirmInput: string, Button: string, Link: string) => `
  <main class="auth">
    <h1 class="auth__title">{{title}}</h1>
    <form class="auth-form">
      {{EmailInput}}
      {{FirstNameInput}}
      {{LastNameInput}}
      {{PhoneInput}}
      {{PasswordInput}}
      {{PasswordConfirmInput}}

      {{Button}}
      {{Link}}
    </form>
  </main>
`;
