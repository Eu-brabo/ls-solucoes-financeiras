
import { GoogleGenAI } from "@google/genai";
import { FULL_COMPANY_NAME, SERVICES, EMAIL, ADDRESS, PHONE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual da ${FULL_COMPANY_NAME} (ou LS Negócios). 
Sua missão é ajudar potenciais clientes a entenderem nossos serviços financeiros.
Localização: ${ADDRESS}
Contato: ${PHONE}
Email: ${EMAIL}

Nossos serviços principais incluem:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Regras de comportamento:
1. Seja profissional, cordial e direto.
2. Se o cliente demonstrar interesse em um serviço, convide-o a preencher o formulário de agendamento na página.
3. Não invente serviços que não estão na lista.
4. Responda em Português do Brasil.
5. Se perguntarem sobre taxas, informe que as taxas são personalizadas sob análise de crédito e convide para uma reunião.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model' as any, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response = await chat;
    return response.text || "Desculpe, tive um problema ao processar sua solicitação.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "No momento estou indisponível, mas você pode entrar em contato conosco pelo telefone " + PHONE;
  }
};
