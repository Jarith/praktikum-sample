export const template = `
  <button
    class="action-button {% if className %}{{className}}{% endif %}"
    type="{% if type %}{{type}}{% else %}button{% endif %}"
  >
    {{title}}
  </button>
`;
