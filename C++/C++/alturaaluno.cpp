#include <stdio.h> 
#include <stdlib.h> 
#include <math.h> 
#include <iostream>  

using namespace std; 
int main(){
//system("chcp 1252 >> nul");
float AlturaAlunoA, AlturaAlunoB;
float *ptrAltura;
AlturaAlunoA = 1.70;
ptrAltura = &AlturaAlunoA; // Recebe o endereço de AlturaAlunoA
AlturaAlunoB = *ptrAltura;
cout << (" Autura do aluno A: ") << AlturaAlunoA << ("\n");
cout << (" Autura do aluno B: ") << AlturaAlunoB <<("\n");
system("pause");
  }
//A saída do programa será: Altura aluno A: 1.7 Altura aluno B: 1.7