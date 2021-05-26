#include<stdio.h>
#include<stdlib.h>
#include "TADCola.h"

/*
primero estoy utilizando dos struct una es para los elementos y el otro es para hacer las pilas
dentro de la cola tenemos varias variables que todas nos sirven para tener la ubicacion de todos los elementos
*/

//en este caso estamos iniciando una pila y se usan los numeros de -1 porque asi es mas facil saber si nuestra pila esta vacia
//recordemos que como estamos usando arreglos para guardar los elementos pues el 0 cuenta como un elemento
//y el numero de elementos esta en cero proque ese numero si sera un entero jaja
void Initialize(cola *c){
	c->frente=-1;
	c->final=-1;
	c->num_elem=0;
}


/*esta es la funcion para encolar, primero se hacen las evaluaciones para saber si la cola esta vacia o si se quiere encolar en una cola que ya esta llena
como puedes ver se estan agregando los elementos en la posicion del final*/
void Queue(cola * c, elemento e){
	if(c->num_elem==0){//esta evaluacion tambien lo podrias hacer con c->final==-1 pero creo que es mas seguro hacer con num_elem
		c->frente++;
		c->final++;
		c->elementos[c->final] = e;
		c->num_elem++;
	}
	else if(c->num_elem<MAX_ELEMENT){
		c->final++;
		c->elementos[c->final] = e;
		c->num_elem++;
	}
	else{
		printf("\nerror: desbordamiento de cola");
		exit(1);
	}
	return;
}	


/* esta es la funcion para desencolar, como puedes ver regresa un elemento y se ocupan dos variables auxiliares
se utiliza el if en caso de que la cola este vacia y se quiera desencolar, el for que estoy utilizando es para recorrer los elementos*/
elemento Dequeue(cola * c){
	elemento e;
	int i;
	if(c->num_elem==0){
		printf("error: desbordamiento de cola");
		exit(2);
	}
	else{
		e = c->elementos[c->frente];
		
		for(i = c->frente; i < c->final; i++){
			c->elementos[i] = c->elementos[i + 1];
			}
		c->final--;
		c->num_elem--;
		
		if(c->num_elem==0)
			Initialize(c);
	}
	
	return e;
}


/*esta funcion es para saber si nuestra cola esta vacia y se utiliza el operador terniario*/
boolean Empty(cola * c){
	return(c->num_elem==0) ? TRUE : FALSE;
}


/* simplemente se consulta el elemento que esta enfrente de la cola y como tenemos a estos elementos ubicados pues es tan simple como consultar
el elemento del arreglo en la posicion de c->frente*/
elemento Front(cola * c){
	return c->elementos[c->frente];
}


/*simplemente se consulta el elemneto que esta al final de la cola y coomo tenemos a estos ubicados pues es tan simple como consultar
el elemento del arreglo en la posicion de c->final*/
elemento Final(cola * c){
	return c->elementos[c->final];
}
/*simplemente es cuando queremos saber cual es el tamaño de nuestra cola y como tenemos una variable que nos dice cual es el tamaño pues solo la regresamos*/
int Size(cola * c){
	return c->num_elem;
}



/*esta funcion nos sirve para conocer un elemento en una determinada posicion, como nuestra cola esta guardada en un arreglo la podemos consultar rapidamente con la posicion i-1*/
elemento Element(cola * c, int i){
	elemento r;
	if(i>0&&i<Size(c)){
		r = c->elementos[i-1];
	}
	else{
		printf("error no existe el dato");
		exit(3);
	}
	return r;
}


/*esta funcion es para destruir una cola osea liberar esa memoria que ya no estamos utilizando pero como estamos hablando de arreglos y memoria estatica pues no tenemos muchos problemas
con tener un proceso riguroso para liberar memoria simplemente lo que hacemos iniciar la pila nuevamente osea resetear las variables para empezar la cola de nuevo*/
void Destroy(cola * c){
	Initialize(c);
}


	
		