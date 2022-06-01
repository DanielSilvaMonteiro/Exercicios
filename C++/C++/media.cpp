#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream>  

using namespace std; 

int main() 

{ 

  float nota1, nota2, nota3, media; 

  cout << "Digite a primeira nota do aluno: "; 

  cin >> nota1; 

  cout << "Digite a segunda nota do aluno: "; 

  cin >> nota2;  

  cout << "Digite a terceira nota do aluno: "; 

  cin >> nota3; 

  media = (nota1 + nota2+ nota3) / 3; 

  cout << "Media do aluno = " << media; 

  system("pause"); 

  return 0; 

} 