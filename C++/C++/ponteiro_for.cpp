#include <stdio.h> 
#include <stdlib.h> 
#include <math.h> 
#include <iostream> 

using namespace std;
int main(){
  
float Nota[4];
float *ptrPrimBimestre;  
Nota[0] = 7.8;
Nota[1] = 9.0;
Nota[2] = 7.0;
Nota[3] = 9.5;

  for(int i = 0; i < (sizeof(Nota)/sizeof(Nota[0])); i++){
    
  ptrPrimBimestre = &Nota[i]; // Inicializa o vetor
    cout << i+1 << "º "<< "Nota 3º bimestre: " << *ptrPrimBimestre << endl;
    
}
system("pause");
}