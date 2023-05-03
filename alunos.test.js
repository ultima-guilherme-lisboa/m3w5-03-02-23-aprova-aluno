// Valida arpovacao deve ser um funcao que recebe como primeiro parametro
// a media do aluno e segundo parametro a frequencia
// Quando aprovado retorna true 
// Quando reprovado retorna false


const validaAprovacao = require("./alunos")



const mediaMinimaAprovacao = 7
const frequenciaMinimaAprovacao = 80
const aprovado = true
const reprovado = false


test('Aluno aprovado com media maior que a media minima para aprovacao e frequencia maior que a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao + 1, frequenciaMinimaAprovacao + 1)).toEqual(aprovado)
 })

 test('Aluno aprovado com media maior que a media minima para aprovacao e frequencia igual a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao + 2, frequenciaMinimaAprovacao)).toEqual(aprovado)
 })

 test('Aluno reprovado com media maior que a media minima para aprovacao e frequencia menor que a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao + 1.5 , frequenciaMinimaAprovacao - 1)).toEqual(reprovado)
 })

 test('Aluno aprovado com igual a media igual a media minima para aprovacao e frequencia maior que a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao, frequenciaMinimaAprovacao)).toEqual(aprovado)
 })

 test('Aluno aprovado com igual a media igual a media minima para aprovacao e frequencia igual a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao, frequenciaMinimaAprovacao)).toEqual(aprovado)
 })

 test('Aluno reprovado com a media igual a media minima para aprovacao e frequencia menor que a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao, frequenciaMinimaAprovacao - 1)).toEqual(reprovado)
 })

 test('Aluno reprovado com a media menor que a media minima para aprovacao e frequencia maior que a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao - 1, frequenciaMinimaAprovacao + 1)).toEqual(reprovado)
 })

 test('Aluno reprovado com a media menor que a media minima para aprovacao e frequencia igual a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao - 1, frequenciaMinimaAprovacao)).toEqual(reprovado)
 })

 test('Aluno reprovado com a media menor que a media minima para aprovacao e frequencia menor que a frequencia minima para aprovacao', () => { 
    expect(validaAprovacao(mediaMinimaAprovacao - 1, frequenciaMinimaAprovacao - 1)).toEqual(reprovado)
 })