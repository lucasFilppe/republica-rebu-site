// app/a-republica/page.tsx

import { Header } from '../../components/shared/Header'; // Ajuste o caminho conforme sua estrutura
import { Footer } from '../../components/shared/Footer'; // Ajuste o caminho conforme sua estrutura
import Link from 'next/link';
import { Briefcase, Gavel, Users, Heart } from 'lucide-react'; // Ícones para os Pilares

// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: 'A República Rebu | História, Valores e Fundação',
  description: 'Conheça a história da República Rebu, a primeira federal feminina de Ouro Preto, fundada em 1975, e seus pilares de convivência.',
};

// Componente Reutilizável para destacar um pilar da República
const PilarCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string } )=> (
  <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-b-4 border-[#FF8C00]">
    <Icon className="w-12 h-12 text-[#D44700] mx-auto mb-4" />
    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


export default function ARepublica() { // Nome da função mantido simples para o App Router
  return (
    <>
      <Header />

      <main className="flex-grow">
        
        {/* Seção 1: Hero com Destaque na Fundação */}
        <section className="relative pt-20 pb-12 md:py-24 bg-[#1A1A1A] text-white overflow-hidden">
          
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
              República Rebu: Nossa História
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Pioneirismo, Tradição e Força Feminina em Ouro Preto desde 1975.
            </p>
          </div>
        </section>

        {/* Seção 2: Introdução e Contexto Histórico */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#D44700] pl-4">
              O Legado da Primeira Federal Feminina
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fundada em 1975, a Rebu não é apenas uma moradia estudantil; é um marco na história de Ouro Preto. Nasceu da necessidade de criar um espaço seguro, acolhedor e, acima de tudo, **federal**, para estudantes mulheres que vinham de diversas regiões do Brasil para cursar a UFOP (antiga EMOP). Nosso nome carrega o peso e a honra de sermos pioneiras.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed italic">
              &quot;Nossa história é escrita com a garra de cada moradora que, ao longo das décadas, moldou a cultura de respeito, autonomia e irmandade que nos define.&quot;
            </p>
          </div>
        </section>

        {/* Seção 3: Pilares da República (Grid de Cards) */}
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
              Os Pilares que Sustentam a Rebu
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <PilarCard 
                icon={Gavel} 
                title="Autonomia e Organização" 
                // CORRIGIDO: string de descrição fechada corretamente:
                description="Somos uma república autogerida. Todas as decisões são tomadas em assembleia, promovendo responsabilidade e liderança."
              />
              <PilarCard 
                icon={Users} 
                title="Convivência e Respeito" 
                description="Valorizamos a diversidade e o respeito mútuo. Nossas regras garantem um ambiente de apoio e crescimento coletivo."
              />
              <PilarCard 
                icon={Briefcase} 
                title="Compromisso Federal" 
                description="Mantemos a tradição federal em nosso DNA, focando no apoio mútuo, na vida acadêmica e na representatividade estudantil."
              />
               <PilarCard 
                icon={Heart} 
                title="Cultura e Tradição" 
                description="Participamos ativamente da vida cultural de Ouro Preto, com festas tradicionais e o famoso Carnaval Ouro-Pretano."
              />
            </div>

            <div className="text-center mt-12">
                 <Link 
                    href="/processo-seletivo" 
                    className="inline-block bg-[#D44700] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-[#D44700]/50 hover:bg-[#FF8C00] hover:shadow-[#FF8C00]/60 transition duration-300 transform hover:scale-105"
                  >
                    Faça Parte da Nossa História &rarr;
                  </Link>
            </div>
          </div>
        </section>

        {/* Seção 4: Linha do Tempo (Call to Action para o Memorial) */}
         <section className="py-16 bg-[#1A1A1A] text-center text-white">
            <h2 className="text-3xl font-bold mb-4 text-[#FF8C00]">
                Veja Quem Construiu Nosso Legado
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Cada moradora que passou pela Rebu deixou sua marca. Visite nosso memorial e conheça a linha do tempo completa e a história de cada era.
            </p>
            <Link 
                href="/memorial" 
                className="inline-block border-2 border-[#D44700] text-[#D44700] font-bold py-3 px-8 rounded-full hover:bg-[#D44700] hover:text-white transition duration-300"
            >
                Visitar o Memorial &rarr;
            </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}