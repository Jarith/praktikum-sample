export const template = `
  {% if labelText %}
  <label {% if classes.label %}class="{{classes.label}}"{% endif %} for="{{id}}">
    {{labelText}}
  </label>
  {% endif %}
  {% if Label %}
  <label {% if classes.label %}class="{{classes.label}}"{% endif %} for="{{id}}">
    {{Label}}
  </label>
  {% endif %}
  <input
    id="{{id}}"
    name="{{name}}"
    {% if placeholder %}placeholder="{{placeholder}}"{% endif %}
    type="{{type}}"
    {% if value %}value="{{value}}"{% endif %}
    {% if classes.input %}class="{{classes.input}}"{% endif %}
  />
`