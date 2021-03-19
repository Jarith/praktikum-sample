export const template = `
  <img
    src="{{src}}"
    alt="{{alt}}"
    height="{{height}}"
    width="{{width}}"
    {% if className %}class="{{className}}"{% endif %}
  />
`;
