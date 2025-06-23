# 🦝 Raccoon - Marketplace de Moda Urbana

Um marketplace moderno e responsivo de moda masculina desenvolvido em React/Next.js, inspirado nas últimas tendências de e-commerce.

## ✨ Características

- 🎨 **Design Moderno** - Interface limpa e profissional
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e suave
- 🛒 **E-commerce Ready** - Estrutura preparada para funcionalidades de loja
- 🇧🇷 **Localizado para o Brasil** - Textos em português e preços em reais
- ♿ **Acessível** - Seguindo boas práticas de acessibilidade

## 🛠️ Stack Tecnológica

- **Frontend**: React 18 + Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Ícones**: Lucide React
- **Imagens**: Unsplash (URLs otimizadas)

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório
\`\`\`bash
git clone https://github.com/mansque404/raccoon-marketplace.git
cd raccoon-marketplace
\`\`\`

2. Instale as dependências
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Execute o projeto em desenvolvimento
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

\`\`\`
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
\`\`\`

## 🎨 Componentes Principais

### Header
- Logo da marca Raccoon
- Navegação responsiva
- Carrinho de compras e wishlist
- Menu mobile com drawer

### Hero Section
- Título impactante "RENOVE SEU GUARDA-ROUPA"
- Elementos decorativos animados
- Call-to-action principal

### Product Grid
- Grid responsivo de produtos
- Sistema de avaliações (estrelas)
- Badges de "NOVO"
- Hover effects suaves

### Promotional Sections
- Coleções sazonais (Inverno/Verão)
- Imagens de fundo com overlay
- CTAs específicos por coleção

### Stats Section
- Fundo escuro com padrão de pontos
- Estatísticas da empresa
- Design impactante

## 🎯 Funcionalidades

- [x] Design responsivo completo
- [x] Navegação intuitiva
- [x] Grid de produtos com filtros visuais
- [x] Seções promocionais
- [x] Footer com showcase de produtos
- [x] Otimização de imagens
- [x] Acessibilidade (ARIA labels, alt texts)
- [ ] Carrinho de compras funcional
- [ ] Sistema de autenticação
- [ ] Integração com pagamento
- [ ] Filtros de produtos
- [ ] Sistema de busca

## 🌟 Destaques do Design

- **Paleta de Cores**: Tons neutros com acentos coloridos
- **Tipografia**: Fontes bold e modernas
- **Espaçamento**: Grid system consistente
- **Animações**: Hover effects e transições suaves
- **Ícones**: Lucide React para consistência visual

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
\`\`\`bash
npm run build
vercel --prod
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Upload da pasta .next para Netlify
\`\`\`

### Docker
\`\`\`bash
docker build -t raccoon-marketplace .
docker run -p 3000:3000 raccoon-marketplace
\`\`\`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 👨‍💻 Autor

Desenvolvido com ❤️ para o mercado brasileiro de moda urbana.

## 🙏 Agradecimentos

- [Unsplash](https://unsplash.com) pelas imagens de alta qualidade
- [shadcn/ui](https://ui.shadcn.com) pelos componentes
- [Lucide](https://lucide.dev) pelos ícones
- [Tailwind CSS](https://tailwindcss.com) pelo framework de CSS

---

**Raccoon** - Nova Geração de Moda Urbana 🦝
