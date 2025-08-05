# CoCCC
A Call of Chtullu Character Creator Customized to a campaign

# 🌲 Rolaí - Criador de Personagens Call of Cthulhu

*Ecos da Terra Queimada • 2053*

Aplicativo web otimizado para Android para criação de personagens de Call of Cthulhu, adaptado para a aventura "Rolaí - Ecos da Terra Queimada".

## 📱 Características

- *PWA (Progressive Web App)*: Funciona como app nativo no Android
- *Otimizado para Mobile*: Interface touch-friendly e responsiva
- *Offline*: Funciona sem conexão à internet
- *Português*: Totalmente localizado para o Brasil
- *Temática Específica*: Adaptado para o cenário pós-apocalíptico de 2053

## 🎮 Sobre a Aventura

*Contexto*: 27 anos após a Terceira Guerra Mundial, pequenas Zonas de Regeneração mantêm a vida no planeta. No Parque Nacional do Itatiaia, algo está fazendo as capivaras desaparecerem misteriosamente...

*Profissões Disponíveis*:
- Biólogo/Pesquisador
- Ex-Militar/Soldado  
- Técnico/Engenheiro
- Médico/Paramédico
- Sobrevivente Local
- Guia/Rastreador
- Operador de Rádio
- Refugiado Urbano

## 🚀 Como Hospedar no GitHub Pages

### 1. Criar Repositório
bash
# No GitHub, crie um novo repositório público
# Nome sugerido: rolai-character-creator


### 2. Estrutura de Arquivos
Organize os arquivos assim no seu repositório:

rolai-character-creator/
├── index.html          # Arquivo principal do app
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker
└── README.md          # Este arquivo


### 3. Upload dos Arquivos
1. Faça upload dos arquivos HTML, JSON e JS criados
2. Renomeie o arquivo principal para index.html

### 4. Ativar GitHub Pages
1. Vá em *Settings* do repositório
2. Role até *Pages* no menu lateral  
3. Em *Source, selecione **Deploy from a branch*
4. Selecione *main* branch e */ (root)*
5. Clique em *Save*

### 5. Acessar o App
- URL será: https://SEU_USUARIO.github.io/rolai-character-creator/
- Aguarde alguns minutos para propagação

## 📱 Instalando no Android

1. Acesse o link no Chrome/Edge do Android
2. Toque no menu (⋮) e selecione *"Adicionar à tela inicial"*
3. Confirme a instalação
4. O app aparecerá como ícone nativo na tela inicial

## 🎲 Como Usar

### 1. Info Básica
- Insira nome, idade e profissão do personagem
- Leia a descrição contextual da profissão escolhida
- Adicione história pessoal relevante ao cenário

### 2. Atributos  
- Use *"Rolar Atributos"* para gerar valores aleatórios
- Valores são gerados seguindo regras do Call of Cthulhu 7ª edição
- Estatísticas derivadas (Vida, Sanidade) são calculadas automaticamente

### 3. Perícias
- *"Distribuir Pontos da Profissão"*: Aplica pontos profissionais automaticamente
- *"Distribuir Pontos Pessoais"*: Calcula pontos pessoais baseados na Inteligência
- Perícias selecionadas são relevantes para a aventura

### 4. Ficha Final
- Visualize o personagem completo
- *Exportar*: Salva arquivo JSON do personagem
- *Imprimir*: Gera versão para impressão
- *Novo Personagem*: Reseta tudo para criar outro

## 🛠 Recursos Técnicos

- *Framework*: HTML5, CSS3, JavaScript (Vanilla)
- *PWA*: Service Worker + Web App Manifest
- *Design*: Responsivo com tema pós-apocalíptico/horror
- *Armazenamento*: Dados mantidos em memória (não usa localStorage)
- *Compatibilidade*: Chrome, Firefox, Safari, Edge moderno

## 🎨 Personalização

### Modificar Cores/Tema
Edite as variáveis CSS no <style> do arquivo HTML:
css
/* Cores principais */
background: linear-gradient(135deg, #0f1419 0%, #1a472a 50%, #2d5016 100%);
--primary-color: #1a472a;
--accent-color: #4a7c59;
--text-color: #e8f4e6;


### Adicionar Profissões
No array occupationInfo (JavaScript):
javascript
nova_profissao: {
    title: "Título da Profissão",
    description: "Descrição contextual...",
    skills: ['Perícia1', 'Perícia2', ...],
    points: 240
}


### Modificar Perícias
Edite o array skills para adicionar/remover perícias:
javascript
{ name: 'Nova Perícia', base: 10 }


## 🐛 Resolução de Problemas

### App não carrega no celular
- Verifique se o GitHub Pages está ativo
- Aguarde até 10 minutos para propagação
- Teste em modo incógnito

### Botão "Adicionar à tela inicial" não aparece
- Use Chrome ou Edge no Android
- Acesse via HTTPS (GitHub Pages usa automaticamente)
- Alguns navegadores exigem interação antes de mostrar prompt

### Dados não salvam
- App usa armazenamento em memória por design
- Use "Exportar Personagem" para salvar arquivo JSON
- Reimporte os dados copiando valores manualmente

### Layout quebrado no celular
- Verifique se a viewport meta tag está presente
- Teste em diferentes orientações (retrato/paisagem)
- Alguns navegadores mais antigos podem ter problemas

## 🔧 Desenvolvimento Local

Para testar localmente antes de fazer upload:

bash
# Instalar servidor HTTP simples (Python)
python -m http.server 8000

# Ou usar Node.js
npx http-server -p 8000

# Acessar: http://localhost:8000


## 📖 Regras do Call of Cthulhu

### Geração de Atributos
- *STR, CON, DEX, APP, POW*: 3d6 × 5 (15-90)
- *SIZ*: (2d6+6) × 5 (40-90)  
- *INT, EDU*: (2d6+6) × 5 (40-90)

### Estatísticas Derivadas
- *Pontos de Vida*: (CON + SIZ) ÷ 10
- *Sanidade*: POW
- *Sorte*: 3d6 × 5

### Distribuição de Pontos
- *Profissionais*: 240 pontos entre perícias da profissão
- *Pessoais*: INT × 2 pontos em perícias de interesse
- *Hobby*: 20 pontos distribuídos livremente

## 🌍 Contexto da Aventura

### O Mundo em 2053
Após a devastação nuclear de 2026, a humanidade sobrevive em pequenos grupos isolados. As *Zonas de Regeneração* são oásis verdes protegidos por uma rede descentralizada de cientistas, militares aposentados e sobreviventes locais.

### Itatiaia - A Última Floresta
O Parque Nacional do Itatiaia, especialmente a região do Pico das Agulhas Negras, mantém uma biodiversidade rica e uma nascente de água potável. Mas algo está perturbando o equilíbrio natural...

### Ganchos de Aventura
- *Para Cientistas*: Anomalias biológicas inexplicáveis
- *Para Ex-Militares*: Possível ameaça à zona segura  
- *Para Locais*: A floresta não soa como antes
- *Para Técnicos*: Equipamentos registrando dados estranhos

## 📝 Dicas para Mestres

### Usando o App na Mesa
1. *Criação em Grupo*: Cada jogador usa seu celular simultaneamente
2. *Backup*: Sempre exporte os personagens antes da sessão
3. *Impressão*: Use a função de impressão para fichas físicas
4. *Modificações*: JSON exportado pode ser editado e reimportado

### Adaptando para Outras Aventuras
- Modifique descrições das profissões
- Ajuste perícias relevantes
- Altere texto contextual na seção "Info Básica"
- Personalize cores e tema visual

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! 

### Como Contribuir
1. Fork do repositório
2. Crie branch para sua feature
3. Commit suas mudanças  
4. Abra Pull Request

### Ideias para Futuras Versões
- [ ] Sistema de importação de personagens
- [ ] Calculadora de combate integrada
- [ ] Gerador de NPCs
- [ ] Tabelas de sanidade
- [ ] Modo escuro/claro
- [ ] Suporte a outros idiomas

## 📄 Licença

Este projeto é open source. Use, modifique e distribua livremente para suas mesas de RPG!

## 🎲 Que os dados sejam favoráveis!

Boa sorte explorando os mistérios sombrios do Itatiaia pós-apocalíptico. Lembre-se: nem toda criatura que se move na floresta regenerada é natural...

---

*Desenvolvido para a comunidade brasileira de Call of Cthulhu*