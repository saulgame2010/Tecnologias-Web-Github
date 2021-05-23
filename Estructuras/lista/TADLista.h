#define TRUE 1
#define FALSE 0
#define MAX_ELEMENT 50

typedef unsigned char boolean;

typedef struct elemento
{
	//las variables que necesites van aqui
	int n;
	char c;
}elemento;

typedef struct nodo
{
	elemento e;
	struct nodo *siguiente;
}nodo;

typedef nodo* posicion;

typedef struct lista
{
	int tamanio;
	posicion frente;
	posicion final;
}lista;

void Initialize (lista *l);
void Destroy (lista *l);
posicion Final (lista *l);
posicion First (lista *l);
posicion Following (lista *l,posicion p);
posicion Previous (lista *l,posicion p);
posicion Search (lista *l,elemento e);
elemento Position (lista *l,posicion p);
boolean ValidatePosition (lista *l,posicion p);
posicion ElementPosition(lista *l, int n);
elemento Element(lista *l, int n);
int Size (lista *l);
boolean Empty (lista *l);
void Insert (lista * l, posicion p, elemento e, boolean b);
void Add (lista *l,elemento e);
void Remove (lista *l,posicion p);
void Replace (lista *l,posicion p, elemento e);