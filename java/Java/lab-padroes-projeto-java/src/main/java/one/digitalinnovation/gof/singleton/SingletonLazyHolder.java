package one.digitalinnovation.gof.singleton;

/**
 *Singleton "Lazy Holder"
 * @see <a href="https://stackoverflow.com/a/24018148">Referencia</a>
 * @author falvojr - Daniel Monteiro
 */
public class SingletonLazyHolder {

    //esta classe serve para encapsular a instancia e, ela deve ser publica
    private static class InstanciaHolder {
        public static SingletonLazyHolder instancia = new SingletonLazyHolder();
    }
    private SingletonLazyHolder(){
        super();
    }

    public static SingletonLazyHolder getInstancia() {
        return InstanciaHolder.instancia;
    }
}
