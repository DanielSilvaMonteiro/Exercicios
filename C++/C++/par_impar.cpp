#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream>  

using namespace std; 

int main() 

{ 

  int valor; 

  int ehpar; 

  int i =0; 

  while(i == 0){   

  cout << "Valor: "; 

  cin >> valor; 

  if (valor >= 0){ 

 

    ehpar = ((valor % 2)== 0); 

    if (ehpar)  

      cout  << "par"; 

      else  

      cout << "impar"; 

    } 

  cout <<"\n \n Digite 0 para continuar ou 0 para sair"; 

    cin >> i; 

    } 

  cout <<"\n\n"; 

  system("pause"); 

  return 0; 

}