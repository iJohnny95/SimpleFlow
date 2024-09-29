import { useState } from "react";
import { ArrowRight, BarChart2, Cpu, Database, LineChart, Zap, Menu, X } from "lucide-react";
import Link from "next/link";

export default function PaginaInicial() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500">
      {/* Cabeçalho */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 shadow-md transition-colors duration-500 px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <Zap className="h-6 w-6 text-teal-400" />
          <span className="ml-2 text-2xl font-bold text-white">FluxoSimples</span>
        </Link>

        {/* Ícone do Menu Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={alternarMenu} className="text-white">
            {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navegação no Desktop */}
        <div className="hidden sm:flex items-center">
          <nav className="flex gap-4 sm:gap-6">
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#servicos">
              Serviços
            </Link>
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#precos">
              Preços
            </Link>
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#testemunhos">
              Testemunhos
            </Link>
            <Link 
              className="text-sm font-bold bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300"
              href="#contacte-nos">
              Contacte-nos
            </Link>
          </nav>
        </div>
      </header>

      {/* Menu Mobile (Desliza da direita abaixo da barra de navegação) */}
      <div
        className={`fixed top-16 right-0 w-64 bg-gray-900 text-white transition-transform transform ${
          menuAberto ? 'translate-x-0' : 'translate-x-full'
        } duration-300 z-40 sm:hidden`}>
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#servicos" 
            onClick={alternarMenu}>
            Serviços
          </Link>
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#precos" 
            onClick={alternarMenu}>
            Preços
          </Link>
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#testemunhos" 
            onClick={alternarMenu}>
            Testemunhos
          </Link>
          <Link 
            className="text-sm font-bold bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300" 
            href="#contacte-nos" 
            onClick={alternarMenu}>
            Contacte-nos
          </Link>
        </nav>
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-1 pt-16">
        {/* Secção de Funcionalidades */}
        <section id="funcionalidades" className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-pulse">
                  Automatize o Seu Sucesso com FluxoSimples
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl lg:text-2xl">
                  Experimente o poder da automação, análises de dados em tempo real, e dashboards interativos para fazer crescer o seu negócio.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contacte-nos">
                  <button className="px-6 py-3 rounded-lg bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    Contacte-nos
                  </button>
                </Link>
                <Link href="#servicos">
                  <button className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-gray-900 font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    Saber Mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Serviços */}
        <section id="servicos" className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900 dark:text-gray-100">
              Os Nossos Serviços Premium
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-center mb-12">
              No FluxoSimples, compreendemos os desafios que as empresas enfrentam – gerir tarefas repetitivas, processar grandes volumes de dados e tomar decisões em tempo útil. As nossas ferramentas inteligentes de automação retiram o fardo das tarefas manuais dos seus ombros, permitindo-lhe focar-se no crescimento do seu negócio.
            </p>            
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pt-8">
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-bounce" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Automação</h3>
                <p className="text-gray-700 dark:text-gray-400">Simplifique tarefas repetitivas com as nossas soluções inteligentes de automação.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-spin" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Relatórios</h3>
                <p className="text-gray-700 dark:text-gray-400">Gere relatórios dinâmicos que o ajudam a tomar decisões baseadas em dados.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LineChart className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-pulse" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dashboards</h3>
                <p className="text-gray-700 dark:text-gray-400">Visualize os seus dados com dashboards totalmente personalizáveis e interativos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Preços */}
        <section id="precos" className="w-full py-16 md:py-24 bg-indigo-500 dark:bg-gray-800 text-white dark:text-gray-300 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Planos de Preços
            </h2>
            <p className="text-center mb-8 mx-auto max-w-2xl text-lg">
              Oferecemos planos de preços flexíveis adaptados às necessidades do seu negócio. Cada projeto é personalizado para garantir a melhor solução para si.
            </p>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              
              {/* Plano Básico */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Plano Básico</h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400">Ideal para startups que procuram automatizar processos essenciais de negócios.</p>
                  <p className="text-4xl font-bold mb-4">€500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li>✔ Configuração básica de automação</li>
                    <li>✔ Integração de dashboards</li>
                    <li>✔ Ferramentas de relatórios</li>
                  </ul>
                </div>
                <Link href="#comece-ja">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Comece Já
                  </button>
                </Link>
              </div>

              {/* Plano Pro */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Plano Pro</h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400">Para empresas que precisam de automação avançada e insights baseados em dados.</p>
                  <p className="text-4xl font-bold mb-4">€1500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li>✔ Ferramentas de automação avançadas</li>
                    <li>✔ Dashboards personalizáveis</li>
                    <li>✔ Análises e relatórios detalhados</li>
                    <li>✔ Suporte contínuo</li>
                  </ul>
                </div>
                <Link href="#comece-ja">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Comece Já
                  </button>
                </Link>
              </div>

              {/* Plano Empresarial */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Plano Empresarial</h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400">Soluções de automação abrangentes para grandes empresas com suporte dedicado.</p>
                  <p className="text-4xl font-bold mb-4">€5000+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li>✔ Serviços de automação em grande escala</li>
                    <li>✔ Dashboards de nível empresarial</li>
                    <li>✔ Suporte dedicado 24/7</li>
                    <li>✔ Soluções de dados personalizadas</li>
                  </ul>
                </div>
                <Link href="#comece-ja">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Comece Já
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Secção de Testemunhos */}
        <section id="testemunhos" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 text-gray-900 dark:text-white">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-400">
              Ouça o feedback dos nossos clientes satisfeitos que experienciaram transformações incríveis nos seus negócios com as soluções inovadoras do FluxoSimples.
            </p>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              {/* Testemunho 1 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-teal-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <Zap className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "O FluxoSimples revolucionou o nosso fluxo de trabalho. Aumentámos a produtividade em 30% desde que implementámos as suas soluções."
                </p>
                <p className="font-bold text-gray-900 dark:text-white">Jane Doe</p>
                <p className="text-sm text-teal-500">CEO, TechCorp</p>
              </div>

              {/* Testemunho 2 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-indigo-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <BarChart2 className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "Os insights que obtivemos dos dashboards do FluxoSimples têm sido inestimáveis. Mudaram a forma como tomamos decisões."
                </p>
                <p className="font-bold text-gray-900 dark:text-white">John Smith</p>
                <p className="text-sm text-indigo-500">CTO, DataDrive</p>
              </div>

              {/* Testemunho 3 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-purple-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <Cpu className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "As ferramentas de automação do FluxoSimples pouparam-nos inúmeras horas. Agora, a nossa equipa pode focar-se em iniciativas estratégicas."
                </p>
                <p className="font-bold text-gray-900 dark:text-white">Emily Brown</p>
                <p className="text-sm text-purple-500">COO, InnovateCo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Contacto */}
        <section
          id="contacte-nos"
          className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-300 transition-colors duration-500"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Contacte-nos com o FluxoSimples
              </h2>
              <p className="mx-auto max-w-[900px] md:text-xl lg:text-2xl leading-relaxed">
                Pronto para automatizar o seu negócio, otimizar fluxos de trabalho e desbloquear o potencial de crescimento? Preencha o formulário abaixo e nós orientá-lo-emos nos próximos passos.
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-lg shadow-xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="O Seu Nome"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="email"
                    placeholder="O Seu E-mail"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nome da Empresa (opcional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="tel"
                    placeholder="O Seu Telefone (opcional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Orçamento do Projeto (opcional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="date"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                </div>
                <textarea
                  placeholder="Conte-nos sobre as necessidades do seu negócio e como podemos ajudá-lo."
                  rows={5} // Change from rows="5" to rows={5}
                  className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  required
                />
                <div className="text-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Entrar em Contacto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Estilização do Seletor de Data */}
        <style jsx>{`
          /* Ocultar o ícone de calendário padrão */
          input[type="date"]::-webkit-calendar-picker-indicator {
            background: none;
            color: white;
            opacity: 1;
            display: block;
            font-size: 18px;
          }

          /* Adicionar estilização personalizada para o campo de data */
          input[type="date"] {
            position: relative;
            background-color: #2d3748; /* Fundo escuro */
            color: white; /* Texto e ícone brancos */
            padding-right: 40px; /* Espaço para o ícone personalizado */
          }

          /* Adicionar ícone personalizado */
          input[type="date"]::before {
            content: '📅'; /* Ícone de calendário Unicode */
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: white; /* Tornar o ícone branco */
            pointer-events: none;
          }

          /* Remover o ícone de calendário padrão */
          input[type="date"]::-webkit-inner-spin-button,
          input[type="date"]::-webkit-clear-button {
            display: none;
          }
        `}</style>
      </main>

      {/* Rodapé */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400 transition-colors duration-500">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">© 2024 FluxoSimples. Todos os direitos reservados.</p>
          <nav className="mt-4 sm:mt-0 flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-900 dark:text-gray-400" href="#">
              Termos de Serviço
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-900 dark:text-gray-400" href="#">
              Privacidade
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}