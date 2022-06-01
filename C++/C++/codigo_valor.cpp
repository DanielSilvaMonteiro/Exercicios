#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream> 

 

using namespace std; 

int main(){ 

  char codigo; 

  int numerounidades; 

  float apagar; 

  cout << "Forneca o codigo (char) e o num, de unidades (inteiro): "; 

  cin >> codigo >> numerounidades ; 

  if (codigo == 'A'){ 

    apagar = numerounidades * 10;} 

  else  

    if (codigo == 'B'){ 

      apagar = numerounidades * 20;} 

  else  

       if (codigo == 'C'){ 

      apagar = numerounidades * 30;} 

  else { 

    apagar = 0; 

    cout << "\n Codigo errado \n"; 

  } 

  if (apagar > 0 ){ 

    cout << "Valor a pagar " << apagar; 

    if (numerounidades > 10){ 

      cout << "Foram vendidas mais de 10 unidades"; 

    } 

  } 

  cout <<"\n\n"; 

  system("pause"); 

  return 0; 

   

} 

 