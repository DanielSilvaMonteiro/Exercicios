#include <stdio.h> 
#include <stdlib.h> 
#include <math.h> 
#include <iostream>  

using namespace std;

struct DADOS_ALUNO{
int CodAluno;
char Nome[100];
int Turma;
};

int main(){
DADOS_ALUNO AlunoA ;
DADOS_ALUNO *ptrAluno;
cout << "Digite o código do aluno: ";
cin >> AlunoA.CodAluno;
cout << "Digite o nome do aluno: ";
cin >> AlunoA.Nome;
cout << "Digite a turma: ";
cin >> AlunoA.Turma;
ptrAluno = &AlunoA;
cout << "Código do Aluno: " << ptrAluno->CodAluno <<endl;
cout << "Nome: " << ptrAluno->Nome <<endl;
cout << "Turma: " << ptrAluno->Turma <<endl;
system("pause > null"); 
  }