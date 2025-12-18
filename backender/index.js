import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';


const app = express();
app.use(cors({ origin: 'lsnegocios.netlify.app' }));
app.use(express.json());


app.post('/booking', async (req, res) => {
const {
nome,
empresa,
email,
telefone,
dataPreferida,
horario,
mensagem
} = req.body;


try {
const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: process.env.SMTP_PORT,
secure: false,
auth: {
user: process.env.SMTP_USER,
pass: process.env.SMTP_PASS
}
});


await transporter.sendMail({
from: `Site LS Negócio <${process.env.SMTP_USER}>`,
to: 'lsnegocio@lsnegocio.com.br',
subject: '📅 Novo pedido de agendamento',
html: `
<h2>Novo Agendamento</h2>
<p><strong>Nome:</strong> ${nome}</p>
<p><strong>Empresa:</strong> ${empresa}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefone:</strong> ${telefone}</p>
<p><strong>Data:</strong> ${dataPreferida}</p>
<p><strong>Horário:</strong> ${horario}</p>
<p><strong>Mensagem:</strong><br/>${mensagem}</p>
`
});


res.status(200).json({ success: true });
} catch (err) {
  console.error("Erro Nodemailer:", err); // mostra o erro completo no console do Render
  res.status(500).json({ error: err.message }); // mostra a mensagem real no Postman
}
});


app.listen(3001, () => {
console.log('🚀 Backend rodando em https://ls-solucoes-financeiras.onrender.com');
});