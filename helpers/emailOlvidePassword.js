import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const {email,nombre,token} = datos;
  //Enviar email
  
  const info = await transporter.sendMail({
    from: '"APV - Administrador de Pacientes de Veterinaria"<apv@correo.com>',
    to: email,
    subject: "Restablece tu contraseña",
    text: "Restablece tu contraseña",
    html: `<p>Hola: ${nombre}, has solicitado restablecer tu contraseña.</p>
            <p>Sigue el siguiente enlace para generar una nueva contraseña:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Contraseña></a> </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `
  })

};

export default emailOlvidePassword;
