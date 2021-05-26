#include "TADCola.h"
#include<stdio.h>

//para poder compilarlo yo lo hago desde el cmd y con el gcc, pongo "gcc TADCola.h main.c" y ya luego me genera el ejecutable y solo pongo "a"

int main(){
	//con este puedes ver que esta funcionando la cola
	cola cola1;
	elemento j, k, z;
	j.n = 15;
	k.n = 20;
	z.n = 30;
	
	Initialize(&cola1);
	Queue(&cola1, j);
	Queue(&cola1, k);
	Queue(&cola1, z);
	printf("\nel frente es: %d", Front(&cola1));
	printf("\nel final es: %d", Final(&cola1));
	printf("\n el elemento en la posicion 2 es: %d", Element(&cola1, 2));
	printf("\n desencolar: %d", Dequeue(&cola1));
	printf("\nel final es: %d", Final(&cola1));	
	printf("\nel frente es: %d", Front(&cola1));
	Destroy(&cola1);
}