#define MAX_ELEMENT 50
#define TRUE 1
#define FALSE 0

//como el boolean no esta declarado como tal en el c pues hice esta para poder usarlo jaja 
typedef unsigned char boolean;


/*hago este struct porque asi ya no tengo que preocuparme si se quieren usar int, float o char. Si utilizo esta estructura se puede meter las variables que quieras 
y asi no me preocupo si me piden que haga una cola de char o de int*/
typedef struct elemento{
	//aqui puedes agregar las variables que quieras jaja yo uso int porque es la mas facil
	int n;
	} elemento;

/*esta es el struct de la cola y podemos ver que utilizamos un arreglo de elementos y las variables enteras para poder controlar nuestra cola*/	
typedef struct cola{
	elemento elementos[MAX_ELEMENT];
	int frente;
	int final;
	int num_elem;
	} cola; 
//tengo que declarar las funciones aqui
void Initialize(cola * c);
void Queue(cola *c, elemento e);
elemento Dequeue(cola * c);
boolean Empty(cola * c);
elemento Front(cola * c);
elemento Final(cola * c);
elemento Element(cola * c, int p);
int Size(cola * c);
void Destroy(cola * c);