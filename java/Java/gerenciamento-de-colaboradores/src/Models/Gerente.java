package Models;

public class Gerente extends FuncionarioPJ implements CalculaBonificacao {
    private Double valorBonificacao;

@Override
    public void calculaBonificacao(Double porcentagemBonificacao) {
    this.valorBonificacao = (super.getValorRemuneracao()*(porcentagemBonificacao/100))+100d;
    }

    //utilizando mesmo sendo private

@Override
public String toString() {
    return "Models.FuncionarioPJ{" +
            "nome='" + super.getNome() + '\'' +
            ", documento='" + super.getDocumento() + '\'' +
            ", endereco=" + super.getEndereco().getRua() +
            ", horasTrabalhadas=" + super.getHorasTrabalhadas() +
            ", valorHora=" + super.getValorHora() +
            ", valorRemuneracao=" + super.getValorRemuneracao() +
            ", valorBonificacao=" + this.valorBonificacao +
            '}';
}
}
