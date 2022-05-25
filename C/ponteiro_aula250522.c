//EXERCICIO 1 Ponteiro C
 
#include <stdio.h>
void permuta(int *p, int *q){
  int x;
  x= *p;
  *p = *q;
  *q = x;
  
}
int main(void) {
  int a = 3, b=7;
  permuta(&a,&b);
  printf("%d %d", a,b);
}

