const mediaMinimaAprovacao = 7
const frequenciaMinimaAprovacao = 80

function validaAprovacao(media, frequencia) {

    if ((media >= mediaMinimaAprovacao) && (frequencia >= frequenciaMinimaAprovacao )) {
        return true
    }else {
        return false
    }
}

module.exports = validaAprovacao