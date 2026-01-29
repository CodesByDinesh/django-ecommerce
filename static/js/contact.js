document.getElementById("contactForm").addEventListener("submit", storeContact);

function storeContact(event) {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("contactStatus");

    if (!name || !email || !message) {
        status.innerText = "❌ Please fill all fields";
        status.style.color = "red";
        return;
    }

    const contactData = {
        id: Date.now(),
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    // DATABASE (localStorage)
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    status.innerText = "✅ Message sent successfully!";
    status.style.color = "green";

    document.getElementById("contactForm").reset();
}
