//EXERCICIO1 C++

#include <iostream>
#include <stdio.h>
#include <stdlib.h>
using namespace std;

void permuta(int *p, int *q){
  int x;
  x= *p;
  *p = *q;
  *q = x;
  
}

int main(void) {
    int a = 3, b=7;
    permuta(&a,&b);
    
    cout << a<<b;

}