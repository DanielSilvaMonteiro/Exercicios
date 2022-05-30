package Models;

public class OperadorDeCaixa extends FuncionarioCLT {


    public OperadorDeCaixa(String nome, String documento, double valorSalario, Endereco endereco) {
        //super classe, neste caso Models.FuncionarioCLT
        super(nome, documento, valorSalario, endereco);
    }
    public OperadorDeCaixa(){

    }



    @Override //sobrescreve o método substring da classe object
    public String toString() {
        return "Models.OperadorDeCaixa{" +
                "nome='" + nome + '\'' +
                ", documento='" + documento + '\'' +
                ", valorSalario=" + valorSalario +
                ", endereco=" + endereco.getRua() +
                '}';
    }
}
