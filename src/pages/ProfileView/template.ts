export const template = (Avatar: string, EmailField: string, FirstNameField: string, LastNameField: string, NicknameField: string, PhoneField: string, ChangeDataLink: string, ChangePasswordLink: string, LogoutLink: string) => `
  <aside>
      <div class="back-link"></div>
  </aside>
  <main class="profile">
      <div class="profile__avatar-container">
        ${Avatar}
        <h1 class="profile__title">{{title}}</h1>
      </div>
      <dl class="profile__container">
        ${EmailField}
        ${FirstNameField}
        ${LastNameField}
        ${NicknameField}
        ${PhoneField}
      </dl>
      <div class="profile__actions">
        <div class="profile__field-container">
          ${ChangeDataLink}
        </div>
        <div class="profile__field-container">
          ${ChangePasswordLink}
        </div>
        <div class="profile__field-container">
          ${LogoutLink}
        </div>
      </div>
  </main>
`;
