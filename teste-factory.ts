import { EditorPDF, EditorDOCX, EditorXLSX, EditorTXT } from "./editor-arquivo";

// Testando EditorPDF
console.log("Teste com EditorPDF:");
const editorPDF = new EditorPDF();
editorPDF.gerenciarArquivo("documento", "Conteúdo inicial do PDF");

// Testando EditorDOCX
console.log("\nTeste com EditorDOCX:");
const editorDOCX = new EditorDOCX();
editorDOCX.gerenciarArquivo("documento", "Conteúdo inicial do DOCX");

// Testando EditorXLSX
console.log("\nTeste com EditorXLSX:");
const editorXLSX = new EditorXLSX();
editorXLSX.gerenciarArquivo("planilha", "Conteúdo inicial do XLSX");

// Testando EditorTXT
console.log("\nTeste com EditorTXT:");
const editorTXT = new EditorTXT();
editorTXT.gerenciarArquivo("texto", "Conteúdo inicial do TXT");
