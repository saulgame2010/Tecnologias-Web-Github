#define MAX_ELEMENT 50
#define TRUE 1
#define FALSE 0


typedef unsigned char boolean;

typedef struct elemento{
	int n;
	} elemento;
	
typedef struct cola{
	elemento elementos[MAX_ELEMENT];
	int frente;
	int final;
	int num_elem;
	} cola; 
	
void Initialize(cola * c);
void Queue(cola *c, elemento e);
elemento Dequeue(cola * c);
boolean Empty(cola * c);
elemento Front(cola * c);
elemento Final(cola * c);
elemento Element(cola * c, int p);
int Size(cola * c);
void Destroy(cola * c);