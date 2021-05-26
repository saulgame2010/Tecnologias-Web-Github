#include<stdio.h>
#include<stdlib.h>
#include "TADPila.h"

//en este caso lo que hago es iniciar la pila y para eso pongo el tope en -1 indicando que no tiene nada pero que esta lista par ser usada
void Initialize(pila * s){
	s->tope = -1;
	return;
}


/*esta funcion como lo dice es la que hace el push en la cola y como nosotros inicializamos nuestra pila en -1 pues primero tenemos que aumentarla para funcione correctamente
tenemos las validaciones para ver que nuestra pila no haya alcanzado el max de elementos y en caso de que no tenga error pues simplemente se agrega en el elemento en la posicion del tope*/
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


/*Esta funcion es la que hace el pop de la pila primero revisa que no se este haciendo pop de una pila vacia y en caso de que la pila no este vacia pues toma el elemento que esta en el tope y disminute el tope,
entonces ahora nuestro tope es el numero de abajo*/
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

/*esta funcion revisa si nuestra pila esta vacia o no, y simplemente revisa si el tope esta en -1 y si es asi regresa TRUE ya que la pila si esta vacia*/
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


/*esta funcion simplemente nos regresa el valor que esta en el tope de la pila, lo que hace es que revisa si la pila no esta vacia y si no esta vacia nos regresa el elemento que esta en la posicion del tope*/
elemento Top(pila * s)
{
	if(s->tope==-1)
	{
		printf("\nERROR-e=Top(&s): Subdesbordamiento de la pila, no hay elementos en la pila");
		exit(3);
	}
	
	return s->elementos[s->tope];
}

/*con esta funcion podemos ver el tamaño de nuestra pila y podemos hacer uso de la variable tope ya que esta nos dice el numero de elementos que tiene, simplemente le sumamos 1 ya que la variable tope empieza en 0*/
int Size(pila * s)
{
	return s->tope+1;
}

/*con esta funcion podemos destruir una pila para liberar la memoria pero como estamos usando arreglos pues es tan facil como empezar los indices de nuevo osea inicializando la pila */
void Destroy(pila * s)
{
	Initialize(s);
	return;
}

