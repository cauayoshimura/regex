# Formulário de Cadastro com Validação em JavaScript

Este é um formulário de cadastro simples, onde é possível inserir nome, e-mail e telefone (com DDD), com validação feita exclusivamente em JavaScript utilizando expressões regulares.

### Como Funciona?

1. **Nome:**
   - Aceita apenas letras e espaços.
   - Limite máximo de 100 caracteres.
   - Não permite números.

2. **E-mail:**
   - Segue o formato padrão de e-mail.
   - Deve conter pelo menos um caractere antes e depois do "@".
   - Deve conter pelo menos um caractere antes e depois do "." após o "@".

3. **Telefone (com DDD):**
   - Deve seguir o formato padrão brasileiro: XX XXXX-XXXX ou XX XXXXX-XXXX.
   - O primeiro conjunto de números é o DDD.
   - O segundo conjunto de números pode conter 4 ou 5 dígitos.
   - O terceiro conjunto de números sempre contém 4 dígitos.

### Arquivos

- **index.html:** Contém a estrutura HTML do formulário de cadastro.
- **validacoes.js:** Arquivo JavaScript que realiza as validações utilizando expressões regulares.

### Como Utilizar?

1. Abra o arquivo `index.html` em um navegador web.
2. Preencha os campos de nome, e-mail e telefone.
3. Clique no botão "Enviar".
4. Se todos os campos estiverem preenchidos corretamente, o formulário será enviado com sucesso. Caso contrário, serão exibidos alertas informando os problemas nos campos.
