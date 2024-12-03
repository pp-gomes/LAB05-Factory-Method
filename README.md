# Padrão Factory Method: Gerenciamento de Arquivos 📄

Este projeto implementa o padrão de projeto **Factory Method** em TypeScript para criar, salvar e editar arquivos reais com extensões **PDF**, **DOCX**, **XLSX** e **TXT**.

## 🚀 Objetivo

Demonstrar como o **Factory Method** pode ser usado para lidar com diferentes tipos de arquivos, delegando a criação e manipulação de cada tipo de arquivo para subclasses específicas.

- **Extensões Suportadas**:
  - **PDF** (`.pdf`)
  - **DOCX** (`.docx`)
  - **XLSX** (`.xlsx`)
  - **TXT** (`.txt`)

---

## 🛠️ Estrutura do Projeto

O projeto é organizado em módulos para facilitar a manutenção e escalabilidade:

1. **`arquivo.ts`**: Define a interface `Arquivo` e as implementações concretas para diferentes extensões (PDF, DOCX, XLSX e TXT).
2. **`editor-arquivo.ts`**: Define a classe abstrata `EditorArquivo` e os criadores concretos para gerenciar cada tipo de arquivo.
3. **`teste-factory.ts`**: Demonstra o uso do padrão **Factory Method** para criar, salvar e editar arquivos reais.

---

## 🔧 Tecnologias Utilizadas

- **Node.js**: Para execução do código.
- **TypeScript**: Para tipagem estática e modularidade.

---

## 📂 Estrutura de Diretórios
1. ├── arquivo.ts # Define a interface e classes concretas para arquivos 
2. ├── editor-arquivo.ts # Define a classe abstrata e os criadores concretos
3. ├── teste-factory.ts # Arquivo de teste
4. ├── tsconfig.json # Configurações do TypeScript (opcional)

---

## ⚙️ Configuração do Ambiente

### 1. Pré-requisitos

- **Node.js** instalado:
  - [Download Node.js](https://nodejs.org/)
- **TypeScript** instalado globalmente:
  ```bash
  npm install -g typescript
  npm install @types/node
  ```
---

## 🚀 Como Executar o Projeto
1. Clone o Repositório
  ```bash
  git clone https://github.com/seu-usuario/lab01-factory-method.git
  cd lab01-factory-method
  ```

2. Compile os Arquivos TypeScript
  ```bash
  tsc arquivo.ts editor-arquivo.ts teste-factory.ts
  ```
Isso gerará os arquivos .js correspondentes.

3. Execute o Arquivo de Teste
  ```bash
  node teste-factory.js
  ```
---

## 🧪 Exemplos de Saída
Após executar o arquivo de teste, o console exibirá algo como:
  ```bash
    Teste com EditorPDF:
  Arquivo PDF 'documento.pdf' criado.
  Conteúdo salvo no arquivo PDF 'documento.pdf'.
  Conteúdo adicionado ao arquivo PDF 'documento.pdf'.
  
  Teste com EditorDOCX:
  Arquivo DOCX 'documento.docx' criado.
  Conteúdo salvo no arquivo DOCX 'documento.docx'.
  Conteúdo adicionado ao arquivo DOCX 'documento.docx'.
  
  Teste com EditorXLSX:
  Arquivo XLSX 'planilha.xlsx' criado.
  Conteúdo salvo no arquivo XLSX 'planilha.xlsx'.
  Conteúdo adicionado ao arquivo XLSX 'planilha.xlsx'.
  
  Teste com EditorTXT:
  Arquivo TXT 'texto.txt' criado.
  Conteúdo salvo no arquivo TXT 'texto.txt'.
  Conteúdo adicionado ao arquivo TXT 'texto.txt'.
  ```
Os arquivos reais serão criados no diretório atual.

---

## ✨ Funcionalidades Demonstradas
1. Criação de Arquivos:
- Os arquivos são criados com extensões específicas: .pdf, .docx, .xlsx, .txt.
2. Salvamento de Conteúdo:
- Conteúdo inicial é gravado no arquivo durante a criação.
3. Edição de Arquivos:
- Conteúdo adicional é anexado ao arquivo.

---

## 🧱 Extensibilidade
O projeto é altamente modular e permite:
- Adicionar novos tipos de arquivos criando novas implementações da interface Arquivo.
- Expandir as funcionalidades dos editores.

