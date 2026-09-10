# Site — Dr. Matheus da Rosa Camargo (OAB/SC 66.788)

Site institucional estático (HTML + CSS + JS puro, sem build necessário) para o
advogado Dr. Matheus da Rosa Camargo, com foco em Direito Previdenciário e
atuação também em Direito Cível, Ações Criminais e Direito de Medicamentos.

## Estrutura

```
index.html      página única com todas as seções
css/style.css   estilos (paleta azul-marinho + dourado, tipografia Playfair Display + Inter)
js/main.js      menu mobile, animações de entrada, envio do formulário via WhatsApp
assets/         favicon e demais imagens
```

## Como visualizar localmente

Não há dependências. Basta servir a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Antes de publicar — itens a personalizar

Os seguintes dados estão com **placeholders** e precisam ser substituídos:

1. **Número de WhatsApp**: procure por `5500000000000` em `index.html` (3 ocorrências)
   e em `js/main.js` (1 ocorrência) e troque pelo número real, no formato
   `55DDXXXXXXXXX` (código do país + DDD + número, sem espaços ou símbolos).
2. **Telefone e e-mail** exibidos na seção de contato (`#contato` em `index.html`).
3. **Foto do advogado**: atualmente há um monograma "MC" no lugar da foto (na
   seção *Hero* e na seção *Sobre*). Para usar uma foto real, salve o arquivo em
   `assets/` (ex.: `assets/matheus.jpg`) e substitua os blocos:
   - `.hero-photo` (em `index.html`, dentro de `.hero-card`)
   - `.sobre-photo-frame` (em `index.html`, dentro de `#sobre`)

   por uma tag `<img src="assets/matheus.jpg" alt="Dr. Matheus da Rosa Camargo">`,
   mantendo as classes do contêiner para preservar o estilo (moldura, borda dourada etc.).
4. **Redes sociais**: os ícones de Instagram/LinkedIn no rodapé apontam para `#`.
   Atualize os `href` com os links reais.
5. **Endereço/localidade**: ajuste o texto "Santa Catarina · Online para todo o Brasil"
   se desejar informar cidade/endereço específico.

## Observação sobre publicidade advocatícia (OAB)

O rodapé já inclui um aviso de conformidade com o Código de Ética da OAB e o
Provimento nº 205/2021 (publicidade de advocacia). Evite adicionar promessas de
resultado, comparações com outros advogados ou linguagem de captação de clientela,
pois isso pode violar as normas da OAB.

## Publicação

Por ser um site estático, pode ser publicado em qualquer serviço de hospedagem
estática (GitHub Pages, Netlify, Vercel, Cloudflare Pages etc.) apontando para a
raiz do repositório — não há passo de build.
