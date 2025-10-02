import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D44700] text-white mt-auto"> {/* Fundo Preto Carvão */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-start border-b border-gray-700 pb-6 mb-6">
          
          {/* Informação da República */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-3 text-[#D44700]">República Rebu</h4> {/* Título Laranja Intenso */}
            <p className="text-white font-bold text-sm">
              Primeira República Federal Feminina de Ouro Preto.
              <br />
              Rua do Pilar, Ouro Preto - MG
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-3 text-[#D44700]">Navegação</h4> {/* Título Laranja Intenso */}
            <ul className="space-y-2 font-bold text-sm">
              <li><Link href="/processo-seletivo" className="hover:text-[#FF8C00] transition">Processo Seletivo</Link></li> {/* Hover Laranja Chama */}
              <li><Link href="/memorial" className="hover:text-[#FF8C00] transition">Memorial das Ex-Moradoras</Link></li>
              <li><Link href="/contato" className="hover:text-[#FF8C00] transition">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-3">Siga a Rebu</h4> {/* Título Laranja Intenso */}
            <div className="flex space-x-4 font-bold">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8C00]transition">Instagram</a> {/* Hover Laranja Chama */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8C00] transition">Facebook</a>
            </div>
          </div>
        </div>
        
        {/* Direitos Autorais */}
        <div className="text-center text-white text-sm pt-4 font-bold">
          &copy; {currentYear} República Rebu. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};