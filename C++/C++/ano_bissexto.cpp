#include <stdio.h> 

#include <stdlib.h> 

#include <math.h> 

#include <iostream>  

using namespace std; 

int main() { 

int mes, ano, dias, ehbissexto; 

 

  cout << "Forneça mês e ano: "; 

  cin >> mes >> ano; 

 

  if(mes==2){ 

    ehbissexto = 0; 

    if((ano % 100)==0){ 

      if((ano%400)==0) 

        ehbissexto = 1; 

      } 

     else  

        if ((ano %4 )==0) 

          ehbissexto = 1; 

    } 

      if(mes==2) 

        if(ehbissexto) 

          dias = 29; 

        else  

          dias = 28; 

        else  

        if ((mes == 4 )|| ( mes ==6)|| (mes == 9)||  

         (mes == 11)) 

          dias = 30; // abril, junho, setembro, novembro 

         else  

          dias = 31; // Janeiro, março ... 

         cout << "\nMês " << mes << "\ndo ano " <<ano<<  

         "\ntem " << dias; 

       

  cout <<"\n\n"; 

  system("pause"); 

  return 0; 

   

} 