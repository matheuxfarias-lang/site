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

Já preenchidos: WhatsApp/telefone `(49) 99912-2820`, e-mail
`advmatheuscamargo@gmail.com` e a foto do advogado (`assets/mrc.jpeg`).

Ainda com **placeholder**:

1. **Redes sociais**: os ícones de Instagram/LinkedIn no rodapé apontam para `#`.
   Atualize os `href` com os links reais.
2. **Endereço/localidade**: ajuste o texto "Santa Catarina · Online para todo o Brasil"
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
