export const template = `
  <a
    class="link {% if className %}{{className}}{% endif %}"
    href="{{href}}"
  >
    {{title}}
  </a>
`;