// import nodeMailer
const nodemailer = require('nodemailer');

// pegar informações para eo envio de email
const enviarEmailSmtp = nodemailer.createTransport({
        host: '', // servidor SMTP
        port: , // porta
        secure: false, // true para port 465, false para outras ports
        auth: { // dados conta
            user: '', // email conta
            pass: ''  // senha conta
        }
});

//envio email
enviarEmailSmtp.sendMail({
    from: 'Remetente <>', // email remetente
    to: '', // email destinatario
    subject: 'teste envio email SMTP', // titulo email
    html: '<h1>Teste SMTP</h1> <p>Email usando Node.Js</p>', // corpo HTML
    text: 'Teste SMTP email usando node.Js' // suporte caso ahaja erro na execucao HTML
})
.then(() => console.log('Email enviado com sucesso')) // logar sucesso
.catch((err) => console.log('Erro ao enviar email: ', err)); // logar erro