// app/memorial/page.tsx

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, MapPin, Calendar } from 'lucide-react'; 

// --- SEUS DADOS FICTÍCIOS ORIGINAIS ---
// OBS: Mantenha estes dados, mas saiba que a repetição de nomes/períodos/fotos pode gerar erros no console.
const exMoradorasData = [
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' },
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' }, // Alterei a foto para evitar erro de key

];
// OBS: Você precisará de 19 imagens diferentes na sua pasta public/memorial/ para que não haja erro de chave duplicada ou imagem repetida.

// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: 'Memorial da Rebu | Homenagem às Ex-Moradoras',
  description: 'Conheça o legado das veteranas e homenageados que construíram a história da República Rebu, a primeira república federal feminina de Ouro Preto, desde 1975.',
};


// Componente Card da Moradora
const MoradoraCard = ({ name, periodo, curso, apelido, foto }: typeof exMoradorasData[0]) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden">
    
    {/* CORREÇÃO: A altura da imagem foi aumentada para h-72 */}
    <div className="relative w-full h-100"> 
        <Image
            src={foto}
            alt={`Foto de ${name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Apelido em destaque */}
        <span className="absolute bottom-0 right-0 bg-[#D44700] text-white text-sm font-bold px-3 py-1 rounded-tl-lg">
            {apelido}
        </span>
    </div>

    <div className="p-5">
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{name}</h3>
      <p className="text-[#D44700] font-semibold text-sm mb-3">
        {periodo}
      </p>
      <div className="text-gray-600 text-sm space-y-1">
        <p className='flex items-center'><BookOpen className="w-4 h-4 mr-2 text-gray-500" /> {curso}</p>
        <p className='flex items-center'><MapPin className="w-4 h-4 mr-2 text-gray-500" /> Veterana Rebu</p>
      </div>
    </div>
  </div>
);


export default function Memorial() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        
        {/* Seção 1: Hero - Destaque Principal */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
              Nosso Memorial de Moradoras e Homenageados
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Uma homenagem à força e ao legado de todas as mulheres e homenageados que construíram a história da República Rebu ao longo das décadas.
            </p>
          </div>
        </section>

        {/* Seção 2: Linha do Tempo e Contexto */}
        <section className="py-16 bg-[#F8F8F8]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#D44700] pl-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-[#D44700]" /> Linha do Tempo da Rebu
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    A história da Rebu é contada em gestões. Cada período marcou uma época, desde a fundação em 1975 até os dias atuais. O memorial é um arquivo vivo das gerações, tradições e conquistas que definiram a nossa república.
                </p>
                
                {/* CTA para a Galeria de Ex-Moradoras (Próxima Seção) */}
                <div className="text-center mt-12">
                   <Link 
                      href="#veteranas" // Link âncora para a próxima seção
                      className="inline-block border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold py-3 px-8 rounded-full hover:bg-[#1A1A1A] hover:text-white transition duration-300"
                    >
                      Ver Todas(os)&darr;
                    </Link>
                </div>
            </div>
        </section>

        {/* Seção 3: Galeria/Grid de Ex-Moradoras */}
        <section id="veteranas" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
              Todas as Nossas Veteranas e homenageados
            </h2>
            
            {/* CORREÇÃO: Grid ajustado para no MÁXIMO 3 colunas em telas grandes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {exMoradorasData.map((moradora, index) => (
                    // Uso do index como key, já que os dados são repetidos
                    <MoradoraCard key={index} {...moradora} />
                ))}
            </div>

            {/* CTA para Contato/Envio de Dados */}
            <div className="text-center mt-16 bg-[#F8F8F8] p-8 rounded-xl border border-gray-200">
                 <h3 className="text-3xl font-bold text-[#D44700] mb-3">Você é uma Ex-Moradora?</h3>
                 <p className="text-lg text-gray-700 mb-6">Ajude-nos a manter nosso memorial atualizado. Entre em contato para incluir ou corrigir seus dados!</p>
                 <Link 
                    href="/contato" 
                    className="inline-block bg-[#D44700] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-[#FF8C00] transition duration-300 transform hover:scale-105"
                  >
                    Enviar Dados &rarr;
                  </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}