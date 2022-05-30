package one.digitalinnovation.gof.singleton;

/**
 * Singleton "apressado"
 * @author falvojr - @Daniel Monteiro
 * Este singleton ja instancia de inicio
 * pra estar tudo pronto de inicio
 */

public class SingletonEager {
    private static SingletonEager instancia = new SingletonEager();

    private SingletonEager(){
        super();
    }

    public static SingletonEager getInstancia() {

        return instancia;
    }
}
