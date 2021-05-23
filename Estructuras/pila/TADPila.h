#define MAX_ELEMENT 50
#define TRUE 1
#define FALSE 0

typedef unsigned char boolean;

typedef struct elemento
{
	int n;
}elemento;

typedef struct pila
{
	elemento elementos[MAX_ELEMENT];
	int tope;
}pila;

void Initialize(pila * s);
void Push(pila * s, elemento e);
elemento Pop(pila * s);
boolean Empty(pila * s);
elemento Top(pila * s);
int Size(pila * s);
void Destroy(pila * s);
	