/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adicao;

import javax.swing.JOptionPane;

/**
 *
 * @author lab7aluno
 */
public class Adicao {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        String primeiroNumero;
        String segundoNumero;
        
        int numero1, numero2, soma;
        
        primeiroNumero = JOptionPane.showInputDialog("Digite o Primeiro N° Inteiro");
        segundoNumero = JOptionPane.showInputDialog("Digite o Segundo N° Inteiro");
        
        numero1 = Integer.parseInt(primeiroNumero);
        numero2 = Integer.parseInt(segundoNumero);
        
        soma = numero1 + numero2;
        
        JOptionPane.showMessageDialog(null, "A soma é "+soma," Resultado da Soma: ",JOptionPane.PLAIN_MESSAGE);
        System.exit(0);      
        
    }
    
}
