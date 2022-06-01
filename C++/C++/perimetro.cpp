#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream>  

using namespace std; 

int main() 

{ 

  float raio, perimetro, area; 

  float PI=3.14; 

  cout << "\nRaio: "; 

  cin >> raio; 

  perimetro = 2 * PI * raio; 

  area = PI * (raio*raio); 

  cout << "\nPerimetro = " << perimetro <<  "\nArea =" << area; 

  cout <<"\n\n"; 

  system("pause"); 

  return 0; 

} 