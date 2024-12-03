import { Arquivo, ArquivoPDF, ArquivoDOCX, ArquivoXLSX, ArquivoTXT } from "./arquivo";

// Classe base abstrata para editores de arquivo
export abstract class EditorArquivo {
    abstract criarArquivo(): Arquivo;

    public gerenciarArquivo(nome: string, conteudo: string): void {
        const arquivo = this.criarArquivo();
        arquivo.criar(nome);
        arquivo.salvar(nome, conteudo);
        arquivo.editar(nome, `\nConteúdo adicional para ${nome}`);
    }
}

// Editor para ArquivoPDF
export class EditorPDF extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoPDF();
    }
}

// Editor para ArquivoDOCX
export class EditorDOCX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoDOCX();
    }
}

// Editor para ArquivoXLSX
export class EditorXLSX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoXLSX();
    }
}

// Editor para ArquivoTXT
export class EditorTXT extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoTXT();
    }
}
