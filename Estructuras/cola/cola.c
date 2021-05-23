#include<stdio.h>
#include<stdlib.h>
#include "TADCola.h"


void Initialize(cola *c){
	c->frente=-1;
	c->final=-1;
	c->num_elem=0;
}

void Queue(cola * c, elemento e){
	if(c->num_elem==0){
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

boolean Empty(cola * c){
	return(c->num_elem==0) ? TRUE : FALSE;
}

elemento Front(cola * c){
	return c->elementos[c->frente];
}

elemento Final(cola * c){
	return c->elementos[c->final];
}

int Size(cola * c){
	return c->num_elem;
}

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

void Destroy(cola * c){
	Initialize(c);
}


	
		