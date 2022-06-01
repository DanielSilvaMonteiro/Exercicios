#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream>  

using namespace std; 

int main() 

{ 

  int numvendedor; 

  float valorvenda; 

  float percentual; 

  float comissao; 

  cout << "Informe o numero do vendedor (inteiro): "; 

  cin >> numvendedor ; 

    cout << "Informe o valor da venda real: "; 

  cin >> valorvenda; 

  cout << "Percentual"; 

  cin >> percentual; 

  comissao=valorvenda*percentual*0.01; 

  cout << "\n Num do vendedor = "<< comissao <<  

 numvendedor << comissao; 

  cout <<"\n\n"; 

  system("pause"); 

  return 0; 

} 