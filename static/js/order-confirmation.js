(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // 👈 replace
})();

function sendOrderEmail() {
    const email = document.getElementById("customerEmail").value;
    const status = document.getElementById("mailStatus");

    if (!email) {
        status.innerText = "❌ Please enter a valid email";
        status.style.color = "red";
        return;
    }

    const templateParams = {
        to_email: email,
        order_id: "123456",
        delivery_date: "August 30, 2024"
    };

    emailjs.send(
        "YOUR_SERVICE_ID",     // 👈 replace
        "YOUR_TEMPLATE_ID",    // 👈 replace
        templateParams
    )
    .then(() => {
        status.innerText = "✅ Order confirmation email sent successfully!";
        status.style.color = "green";
    })
    .catch(() => {
        status.innerText = "❌ Failed to send email. Try again.";
        status.style.color = "red";
    });
}
