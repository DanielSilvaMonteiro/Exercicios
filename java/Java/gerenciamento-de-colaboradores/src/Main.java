import Models.Endereco;
import Models.Gerente;
import Models.OperadorDeCaixa;
import Models.Vendedor;

public class Main {
    public static void main(String[] args) {
        /*Models.Endereco endereco = new Models.Endereco();

        endereco.setRua("Endereço para esta rua");
        System.out.println(endereco.getRua());*/

        Endereco endereco = new Endereco("Rua funcionario", "Complemento endereço funcionário", "bairro funcionário");
        System.out.println("----------");

        Vendedor vendedor = new Vendedor();
        vendedor.setNome("Daniel Monteiro");
        vendedor.setDocumento("123.456.789-00");
        vendedor.setValorSalario(1000d);
        vendedor.setEndereco(endereco);
        vendedor.calculaBonificacao(2d);

        System.out.println(vendedor);
        System.out.println("----------");

        OperadorDeCaixa operadordeCaixa = new OperadorDeCaixa("Daniel Op. Caixa","987.654.321.00",2000d, endereco);
        System.out.println(operadordeCaixa);
        System.out.println("----------");

        //quando não criar construtor vazio, usar este exemplo
        Gerente gerente = new Gerente();
        gerente.setNome("Daniel Models.Gerente");
        gerente.setDocumento("456.789.123-00");
        gerente.setEndereco(endereco);
        gerente.setHorasTrabalhadas(20);
        gerente.setValorHora(100d);
        gerente.calculaRemuneracao();
        gerente.calculaBonificacao(3d);

        System.out.println(gerente);

    }
}