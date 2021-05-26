#include<stdio.h>
#include "TADPila.h"

//para poder compilarlo yo lo hago desde el cmd y con el gcc, pongo "gcc TADCola.h main.c" y ya luego me genera el ejecutable y solo pongo "a"
int main(void)
{
	pila mi_pila;
	elemento e;	
	
	Initialize(&mi_pila);
	
	e.n=1;
	Push(&mi_pila,e);
	e.n=2;
	Push(&mi_pila,e);
	e.n=3;
	Push(&mi_pila,e);
	e.n=4;
	Push(&mi_pila,e);
	e.n=5;
	Push(&mi_pila,e);
	e.n=6;
	Push(&mi_pila,e);
	e.n=7;
	Push(&mi_pila,e);
	e.n=8;
	Push(&mi_pila,e);
	e.n=9;
	Push(&mi_pila,e);
	e=Top(&mi_pila);
	printf("\n%d",e.n);
	
	//Mientras la pila no este vacia (Consultar su altura e imprimirla, hacer un Pop e imprimir la letra del elemento)
	while(!Empty(&mi_pila))
	{	
		printf("\n%d",Top(&mi_pila));
		e=Pop(&mi_pila);
		printf("\t%d",e.n);
	}

	printf("\n%d",Size(&mi_pila));

	Destroy(&mi_pila);	

	return 0;
}

	