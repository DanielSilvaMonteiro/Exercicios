#include <stdio.h>


int main() {
 char *a,*b;
a = "abacate";
b = "uva";

  if(a<b)  
  printf("%s antes de  %s no dicionario %d %d", a,b, *a, *b);
  else
    printf("%s depois de  %s no dicionario", a,b);
  //return 0;
  
}