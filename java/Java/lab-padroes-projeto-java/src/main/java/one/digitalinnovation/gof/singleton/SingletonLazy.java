package one.digitalinnovation.gof.singleton;

/**
 * Singleton "preguiçoso"
 * @author Venilton - @Daniel Monteiro
 * O preguicoso verfica se é null e depois instancia
 */

public class SingletonLazy {
    private static SingletonLazy instancia;

    private SingletonLazy(){
        super();
    }

    public static SingletonLazy getInstancia(){
        if(instancia == null){
            instancia = new SingletonLazy();
        }
        return instancia;
    }

}
