#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream>  

using namespace std; 

int main() 

{ 

  float preco, desconto, apagar; 

  char codigo; 

 

  cout << "Forneca ao codigo (char) e o preco (real): "; 

  cin >> codigo >> preco; 

 

  apagar = preco; 

  desconto = 0 ; 

  if (codigo == 'A'){ 

    desconto = preco /5; 

  } 

  else  

    if (codigo == 'B'){ 

    desconto = preco /10; 

      apagar = apagar - desconto ; 

      } 

  if (apagar >= 80){ 

    desconto = desconto + apagar/10; 

    apagar = apagar * 0.9; 

     

  } 

  cout << " Valor a pagar: " << apagar; 

  if (desconto !=0) 

    cout << " \n Desconto " << desconto ;  

   

  cout <<"\n\n"; 

  system("pause"); 

  return 0; 

} 