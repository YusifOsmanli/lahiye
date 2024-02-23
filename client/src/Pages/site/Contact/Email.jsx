import emailjs from "emailjs-com";

const sendEmail = async (templateParams) => {
  try {
    
    const serviceId = "service_zjfeici";
    const templateId = "template_qz5q9tq";
    const userId = "ODz0NYkLw_m40ROML";

    await emailjs.send(serviceId, templateId, templateParams, userId);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export default sendEmail;