# Sistema de Gerenciamento de Arquivos - Factory Method

Este projeto implementa um sistema de gerenciamento de arquivos usando o padrão de projeto **Factory Method**. Ele permite a manipulação de diferentes tipos de arquivos (PDF, DOCX, XLSX e TXT) com comportamento específico para cada tipo.

## Funcionalidades

- Manipulação de arquivos com abertura e salvamento:
  - Arquivo PDF
  - Arquivo DOCX
  - Arquivo XLSX
  - Arquivo TXT

## Estrutura

1. **Interface Arquivo**: Define os métodos `abrir()` e `salvar()`.
2. **Produtos Concretos**: Classes específicas que implementam a interface Arquivo:
   - `ArquivoPDF`
   - `ArquivoDOCX`
   - `ArquivoXLSX`
   - `ArquivoTXT`
3. **Criador Abstrato**: Classe abstrata `EditorArquivo`, que define o método abstrato `criarArquivo()` e o método concreto `gerenciarArquivo()`.
4. **Criadores Concretos**: Subclasses do `EditorArquivo` que implementam o método `criarArquivo()` para criar instâncias específicas.

## Como Executar

### Pré-requisitos

- Node.js instalado
- TypeScript instalado globalmente:
  ```bash
  npm install -g typescript
