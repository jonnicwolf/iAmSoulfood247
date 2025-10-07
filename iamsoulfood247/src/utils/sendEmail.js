export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_df591pp",
      "template_2dbzpp9",
      form.current,
      "p1Pm1Q0_4BJ-G3HYU"
    )
    .then(
      () => {
        alert("Email sent successfully!");
      },
      (error) => {
        console.error(error.text);
        alert("Failed to send email.");
      }
    );
};