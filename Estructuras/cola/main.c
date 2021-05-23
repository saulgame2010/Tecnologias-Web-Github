#include "TADCola.h"
#include<stdio.h>

int main(){
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