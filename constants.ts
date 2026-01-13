
import { Treatment, Step, FaqItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/5531999812371";

export const TREATMENTS: Treatment[] = [
  {
    title: "Mechas de Luxo",
    description: "Técnicas avançadas de iluminado e loiro com preservação total da saúde capilar."
  },
  {
    title: "Visagismo de Corte",
    description: "Cortes projetados para valorizar os traços do seu rosto e sua personalidade única."
  },
  {
    title: "Terapia Capilar",
    description: "Tratamentos profundos para couro cabeludo e fios, combatendo queda e quebra."
  },
  {
    title: "Cronograma Premium",
    description: "Sequência de nutrição, hidratação e reconstrução com as melhores marcas do mundo."
  },
  {
    title: "Alinhamento Térmico",
    description: "Redução de frizz e volume com fórmulas seguras que mantêm o brilho e balanço natural."
  },
  {
    title: "Penteados e Styling",
    description: "Produções para eventos que exigem o padrão de sofisticação Studio Dias."
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Diagnóstico Capilar",
    description: "Analisamos a saúde do fio e o histórico químico antes de qualquer procedimento."
  },
  {
    number: "02",
    title: "Teste de Mecha",
    description: "Segurança em primeiro lugar para garantir que o resultado seja impecável."
  },
  {
    number: "03",
    title: "Execução Técnica",
    description: "Aplicação minuciosa com as melhores ferramentas e produtos do mercado."
  },
  {
    number: "04",
    title: "Finalização e Home Care",
    description: "Dicas e produtos para você manter o padrão de salão todos os dias em casa."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Preciso agendar com antecedência?",
    answer: "Como somos um salão de alto movimento no Barreiro, recomendamos o agendamento prévio para garantir seu horário com nossos especialistas."
  },
  {
    question: "Quais marcas de produtos vocês utilizam?",
    answer: "Trabalhamos exclusivamente com linhas profissionais de renome internacional (como L'Oréal, Kérastase e Wella)."
  },
  {
    question: "Vocês fazem correção de cor?",
    answer: "Sim, somos especialistas em reverter tons indesejados e devolver a saúde aos fios sensibilizados."
  },
  {
    question: "O teste de mecha é obrigatório?",
    answer: "Para procedimentos químicos como mechas e alisamentos, o teste é indispensável para sua segurança."
  }
];
