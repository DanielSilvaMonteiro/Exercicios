public class Pedido {

    public static void main(String[] args){
        Pedido pedido = new Pedido();

        pedido.gravar();
    }

    //aqui acontece a inversao de controle
    private EnviarEmails enviar = EnviarEmails.obterDadosEmail();

    public  void gravar(){
        //this.enviar = new EnviarEmails("stmp", "contato@email.com", "senha");
        this.enviar.retornar("Pedido criado!");
    }


}
