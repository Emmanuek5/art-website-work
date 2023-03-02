

const form = document.querySelector("form");
function jsonToStringConvertor(obj) {
  var re = JSON.stringify(obj);
  return re;
}

form.onsubmit = (e) => {
  const wss = new WebSocket("ws://localhost:4000");
  wss.addEventListener("open", (e) => {
    console.log(e);
  });

  e.preventDefault();
  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const message = document.getElementById("contact-message");
  const optios = {
    type: "contact-form",
    name: name.value,
    email: email.value,
    message: message.value,
  };
  console.log();
  wss.send(jsonToStringConvertor(optios));

  wss.addEventListener("message", (data) => {
    const done = document.getElementById("done");
    const contact = document.getElementById("contact-div");
    contact.style.display = "none";
    done.style.display = "flex";
    (done.style.fontFamily = "Montserrat"), sans - serif;
  });
};
