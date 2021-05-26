#define MAX_ELEMENT 50
#define TRUE 1
#define FALSE 0
//para poder usar el boolean lo pongo asi 
typedef unsigned char boolean;

//esto es lo misma que la cola, con esto ya puedo poner las variables que yo quiera
typedef struct elemento
{
	//lo que tu quieras bro 
	int n;
}elemento;

//esta es la estructura de la pila y en este caso no se ocupa tantos indices ya que solo necesitamos conocer el tope y de ahi vamos conociendo lo demas 
typedef struct pila
{
	elemento elementos[MAX_ELEMENT];
	int tope;
}pila;

//declaro las funciones que vamos a usar 
void Initialize(pila * s);
void Push(pila * s, elemento e);
elemento Pop(pila * s);
boolean Empty(pila * s);
elemento Top(pila * s);
int Size(pila * s);
void Destroy(pila * s);
	