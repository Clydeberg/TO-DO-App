function getGreetingParts(date = new Date()) {
  const h = date.getHours();
  if (h >= 5 && h < 12)
      return { text: "Good Morning", emoji: "🌅", sub: "Fresh start. Let’s get it!" };
  if (h >= 12 && h < 16)
      return { text: "Good Afternoon", emoji: "🌤️", sub: "Keep up the momentum!" };
  if (h >= 16 && h < 20)
      return { text: "Good Evening", emoji: "🌇", sub: "You’re almost there—finish strong!" };
  return { text: "Good Night", emoji: "🌙", sub: "Wrap up and recharge for tomorrow." };
}

function updateGreeting() {
  const { text, emoji, sub } = getGreetingParts();
  document.getElementById("greeting").innerHTML = `${emoji} ${text}`;
  document.getElementById("subtext").innerText = sub;
}

document.addEventListener("DOMContentLoaded", () => {
  updateGreeting();
  setInterval(updateGreeting, 60000);
});

function editTask(taskId) {
  const newTitle = prompt("Edit Task");
  if (newTitle) {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `/tasks/${taskId}/update`;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'title';
      input.value = newTitle;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
  }
}
