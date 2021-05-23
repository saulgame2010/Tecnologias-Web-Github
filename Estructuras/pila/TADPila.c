#include<stdio.h>
#include<stdlib.h>
#include "TADPila.h"

void Initialize(pila * s){
	s->tope = -1;
	return;
}

void Push(pila * s, elemento e){
	s->tope++;
	
	//Si el tope alcanzo a MAX_ELEMENT, ya no hay más espacio para elementos en el arreglo
	if(s->tope==MAX_ELEMENT)
	{
		printf("\nERROR-Push(&s,e): Desbordamiento de la pila, no hay mas espacio en la pila");
		exit(1);
	}
	
	//Insertar el elemento si no hubo error
	s->elementos[s->tope]=e;
	return;
	
}


elemento Pop(pila * s)
{
	elemento r;
	if(s->tope==-1)
	{
		printf("\nERROR-e=Pop(&s): Subdesbordamiento de la pila, no hay elementos en la pila");
		exit(2);
	}
	
	r = s->elementos[s->tope];
	s->tope--;
	return r;
}

boolean Empty(pila * s)
{
	boolean r;
	if(s->tope==-1)
	{
		r = TRUE;
	}
	else {
		r = FALSE;
	}
	return r;
}

elemento Top(pila * s)
{
	if(s->tope==-1)
	{
		printf("\nERROR-e=Top(&s): Subdesbordamiento de la pila, no hay elementos en la pila");
		exit(3);
	}
	
	return s->elementos[s->tope];
}

int Size(pila * s)
{
	return s->tope+1;
}

void Destroy(pila * s)
{
	Initialize(s);
	return;
}

