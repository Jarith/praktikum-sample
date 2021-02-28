export const template = `
<section class="daily-chat">
  <time class="daily-chat__date">{{date}}</time>
  {% for message in Messages %}
    {{message}}
  {% endfor %}
</section>
`;