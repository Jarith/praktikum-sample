export const template = `
  <aside>
      <div class="back-link"></div>
  </aside>
  <main>
    <form class="profile">
      <div class="profile__avatar-container">
        {{AvatarInput}}
      </div>
      <div class="profile__field-container">
        {{EmailInput}}
      </div>
      <div class="profile__field-container">
        {{FirstNameInput}}
      </div>
      <div class="profile__field-container">
        {{LastNameInput}}
      </div>
      <div class="profile__field-container">
        {{NicknameInput}}
      </div>
      <div class="profile__field-container">
        {{PhoneInput}}
      </div>

      {{Button}}
    </form>
  </main>
`;
