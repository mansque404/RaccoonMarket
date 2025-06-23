🦝 Raccoon - Marketplace de Moda Urbana
Um marketplace moderno e responsivo de moda masculina desenvolvido em React/Next.js, inspirado nas últimas tendências de e-commerce.

Raccoon Marketplace

✨ Características
🎨 Design Moderno - Interface limpa e profissional
📱 Totalmente Responsivo - Funciona perfeitamente em todos os dispositivos
⚡ Performance Otimizada - Carregamento rápido e suave
🛒 E-commerce Ready - Estrutura preparada para funcionalidades de loja
🇧🇷 Localizado para o Brasil - Textos em português e preços em reais
♿ Acessível - Seguindo boas práticas de acessibilidade
🛠️ Stack Tecnológica
Frontend: React 18 + Next.js 14 (App Router)
Linguagem: TypeScript
Styling: Tailwind CSS + shadcn/ui
Ícones: Lucide React
Imagens: Unsplash (URLs otimizadas)
🚀 Começando
Pré-requisitos
Node.js 18+
npm ou yarn
Instalação
Clone o repositório
git clone https://github.com/seu-usuario/raccoon-marketplace.git
cd raccoon-marketplace
Instale as dependências
npm install
# ou
yarn install
Execute o projeto em desenvolvimento
npm run dev
# ou
yarn dev
Abra http://localhost:3000 no seu navegador
📁 Estrutura do Projeto
raccoon-marketplace/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos globais
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   ├── header.tsx            # Cabeçalho
│   ├── hero-section.tsx      # Seção hero
│   ├── benefits-section.tsx  # Seção de benefícios
│   ├── style-section.tsx     # Seção de estilo
│   ├── product-grid.tsx      # Grid de produtos
│   ├── promotional-sections.tsx # Seções promocionais
│   ├── stats-section.tsx     # Seção de estatísticas
│   └── footer.tsx            # Rodapé
├── lib/
│   └── utils.ts              # Utilitários
├── public/
│   └── images/               # Imagens estáticas
└── README.md
🎨 Componentes Principais
Header
Logo da marca Raccoon
Navegação responsiva
Carrinho de compras e wishlist
Menu mobile com drawer
Hero Section
Título impactante "RENOVE SEU GUARDA-ROUPA"
Elementos decorativos animados
Call-to-action principal
Product Grid
Grid responsivo de produtos
Sistema de avaliações (estrelas)
Badges de "NOVO"
Hover effects suaves
Promotional Sections
Coleções sazonais (Inverno/Verão)
Imagens de fundo com overlay
CTAs específicos por coleção
Stats Section
Fundo escuro com padrão de pontos
Estatísticas da empresa
Design impactante
🎯 Funcionalidades
 Design responsivo completo
 Navegação intuitiva
 Grid de produtos com filtros visuais
 Seções promocionais
 Footer com showcase de produtos
 Otimização de imagens
 Acessibilidade (ARIA labels, alt texts)
 Carrinho de compras funcional
 Sistema de autenticação
 Integração com pagamento
 Filtros de produtos
 Sistema de busca
🌟 Destaques do Design
Paleta de Cores: Tons neutros com acentos coloridos
Tipografia: Fontes bold e modernas
Espaçamento: Grid system consistente
Animações: Hover effects e transições suaves
Ícones: Lucide React para consistência visual
📱 Responsividade
O site é totalmente responsivo com breakpoints:

Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
🚀 Deploy
Vercel (Recomendado)
npm run build
vercel --prod
Netlify
npm run build
# Upload da pasta .next para Netlify
Docker
docker build -t raccoon-marketplace .
docker run -p 3000:3000 raccoon-marketplace
🤝 Contribuindo
Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request
📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido com ❤️ para o mercado brasileiro de moda urbana.

🙏 Agradecimentos
Unsplash pelas imagens de alta qualidade
shadcn/ui pelos componentes
Lucide pelos ícones
Tailwind CSS pelo framework de CSS
Raccoon - Nova Geração de Moda Urbana 🦝
