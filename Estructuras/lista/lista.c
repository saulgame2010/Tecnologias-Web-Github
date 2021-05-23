#include<stdio.h>
#include<stdlib.h>
#include "TADLista.h"

void Initialize (lista *l)
{
	l->frente=NULL;
	l->final=NULL;
	l->tamanio=0;
	return; 
}
void Destroy (lista *l)
{
	//Apuntador auxiliar a nodo
	nodo *aux;
	
	//Mientras el apuntador del frente de la lista no sea "NULL"
	while(l->frente != NULL)
	{
		//Guardar la referencia el frente
		aux = l->frente;
		
		//El nuevo frente es el siguiente
		l->frente = l->frente->siguiente;
		
		//Liberar el antiguo frente de memoria
		free(aux);
	}

	//Colocar el final inicializado en "NULL"
	l->final = NULL;
	l->tamanio = 0;
	return;		
}

posicion Final (lista *l)
{
	return l->final;
}

posicion First (lista *l)
{
		return l->frente;
}

posicion Following (lista *l,posicion p)
{
	if(ValidatePosition (l,p))
		return p->siguiente;
	else
		exit(1);		
}

posicion Previous (lista *l,posicion p);
{
	posicion aux;
		
		if(p==l->frente) 
			return NULL;
				
		aux=l->frente;
		while(aux!=NULL)
		{
			if(aux->siguiente==p)
				return aux;
		}
		exit(1);
}

posicion Search (lista *l,elemento e)
{
	posicion aux=l->frente;
	
	while(aux!=NULL)
	{
		if(memcmp(&(aux->e),&e,sizeof(elemento))==0)
		{
			return aux;
		}
		aux=aux->siguiente;
	}
	return NULL;
}

elemento Position (lista *l,posicion p)
{
	if(ValidatePosition (l,p))
		return p->e;
	else
		exit(1);
}

boolean ValidatePosition (lista *l,posicion p)
{
	posicion aux=l->frente;
	
	while(aux!=NULL)
	{
		if(aux==p)
			return TRUE;
		aux=aux->siguiente;	
	}
	return FALSE;
}

posicion ElementPosition(lista *l, int n)
{
	posicion r=NULL;
	int i;
	
	if(n>0&&n<=Size(l))
	{
		aux=l->frente;
		for(i=2;i<=n;i++)
			aux=aux->siguiente;
		return aux;		
	}
	else
		return NULL;
	
}

elemento Element(lista *l, int n)
{
	elemento r;
	int i;
	
	if(n>0&&n<=Size(l))
	{
		aux=l->frente;
		for(i=2;i<=n;i++)
			aux=aux->siguiente;
		return aux->e;		
	}
	else
		exit(1);
}

int Size (lista *l)
{
	
}

boolean Empty (lista *l);
void Insert (lista * l, posicion p, elemento e, boolean b);
void Add (lista *l,elemento e)
{
	
}
void Remove (lista *l,posicion p);
void Replace (lista *l,posicion p, elemento e);