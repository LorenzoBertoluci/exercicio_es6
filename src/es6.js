class Aluno {
    constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
    }
}


const alunos = [
    new Aluno('Alice', 7),
    new Aluno('Bob', 5),
    new Aluno('Charlie', 8),
    new Aluno('David', 4),
];


const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter((aluno) => aluno.nota >= 6);
};

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log('Alunos aprovados:', alunosAprovados);
