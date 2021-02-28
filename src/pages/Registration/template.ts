export const template = `
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
