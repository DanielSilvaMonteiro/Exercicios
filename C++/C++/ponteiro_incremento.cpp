#include <iostream>
using namespace std;
int main(){
  
int Nota;
int *ptrNota;
  
ptrNota = &Nota; // Inicializa o ponteiro
cout << "Endereço 1: " << ptrNota << endl;
ptrNota++;
cout << "Endereço 2: " << ptrNota << endl;
ptrNota++;
cout << "Endereço 3: " << ptrNota << endl;
system("pause > null"); }