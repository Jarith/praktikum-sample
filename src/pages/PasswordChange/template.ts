export const template = `
  <aside>
    <div class="back-link"></div>
  </aside>
  <main>
    <form class="profile">
      <div class="profile__avatar-container">
        {{Avatar}}
      </div>
      <div class="profile__field-container">
        {{OldPasswordInput}}
      </div>
      <div class="profile__field-container">
        {{NewPasswordInput}}
      </div>
      <div class="profile__field-container">
        {{PasswordConfirmInput}}
      </div>

      {{Button}}
    </form>
  </main>
`;
