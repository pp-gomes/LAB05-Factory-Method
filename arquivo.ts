import * as fs from "fs";

// Interface Arquivo: Define os métodos para manipular arquivos reais
export interface Arquivo {
    criar(nome: string): void;
    salvar(nome: string, conteudo: string): void;
    editar(nome: string, conteudo: string): void;
}

// Implementação para arquivos PDF
export class ArquivoPDF implements Arquivo {
    criar(nome: string): void {
        const caminho = `${nome}.pdf`;
        fs.writeFileSync(caminho, "", { flag: "wx" });
        console.log(`Arquivo PDF '${caminho}' criado.`);
    }

    salvar(nome: string, conteudo: string): void {
        const caminho = `${nome}.pdf`;
        fs.writeFileSync(caminho, conteudo);
        console.log(`Conteúdo salvo no arquivo PDF '${caminho}'.`);
    }

    editar(nome: string, conteudo: string): void {
        const caminho = `${nome}.pdf`;
        fs.appendFileSync(caminho, conteudo);
        console.log(`Conteúdo adicionado ao arquivo PDF '${caminho}'.`);
    }
}

// Implementação para arquivos DOCX
export class ArquivoDOCX implements Arquivo {
    criar(nome: string): void {
        const caminho = `${nome}.docx`;
        fs.writeFileSync(caminho, "", { flag: "wx" });
        console.log(`Arquivo DOCX '${caminho}' criado.`);
    }

    salvar(nome: string, conteudo: string): void {
        const caminho = `${nome}.docx`;
        fs.writeFileSync(caminho, conteudo);
        console.log(`Conteúdo salvo no arquivo DOCX '${caminho}'.`);
    }

    editar(nome: string, conteudo: string): void {
        const caminho = `${nome}.docx`;
        fs.appendFileSync(caminho, conteudo);
        console.log(`Conteúdo adicionado ao arquivo DOCX '${caminho}'.`);
    }
}

// Implementação para arquivos XLSX
export class ArquivoXLSX implements Arquivo {
    criar(nome: string): void {
        const caminho = `${nome}.xlsx`;
        fs.writeFileSync(caminho, "", { flag: "wx" });
        console.log(`Arquivo XLSX '${caminho}' criado.`);
    }

    salvar(nome: string, conteudo: string): void {
        const caminho = `${nome}.xlsx`;
        fs.writeFileSync(caminho, conteudo);
        console.log(`Conteúdo salvo no arquivo XLSX '${caminho}'.`);
    }

    editar(nome: string, conteudo: string): void {
        const caminho = `${nome}.xlsx`;
        fs.appendFileSync(caminho, conteudo);
        console.log(`Conteúdo adicionado ao arquivo XLSX '${caminho}'.`);
    }
}

// Implementação para arquivos TXT
export class ArquivoTXT implements Arquivo {
    criar(nome: string): void {
        const caminho = `${nome}.txt`;
        fs.writeFileSync(caminho, "", { flag: "wx" });
        console.log(`Arquivo TXT '${caminho}' criado.`);
    }

    salvar(nome: string, conteudo: string): void {
        const caminho = `${nome}.txt`;
        fs.writeFileSync(caminho, conteudo);
        console.log(`Conteúdo salvo no arquivo TXT '${caminho}'.`);
    }

    editar(nome: string, conteudo: string): void {
        const caminho = `${nome}.txt`;
        fs.appendFileSync(caminho, conteudo);
        console.log(`Conteúdo adicionado ao arquivo TXT '${caminho}'.`);
    }
}
