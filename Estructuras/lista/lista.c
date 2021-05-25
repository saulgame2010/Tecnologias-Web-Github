#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <conio.h>

typedef struct nodo
{
	int info;
	struct nodo *sig;
} nodoL;

// Alias para lista
typedef nodoL* lista;

void insFront(lista *L, int n);/* inserta el valor n al frente de la lista */
int mostrar(nodoL* L);/* muestra por pantalla los valores de L, en forma recursiva */
void borrar(lista *L, int n);/*borra un elemento de la lista*/

int main()
{
	//Se declara y asigna una la variable paraa controlar la opción selecionada en el menú.
	int op=-1;
	//Se declara una lista.
	lista milista=NULL;
	//Mientras op se distinto de 0 (Cuando es op=0 finaliza el programa.
	while(op)
	{
		system("cls"); //Borrar la pantalla.
		//Mostrar en pantalla las opciones del menú.
		printf("\t\tEjemplo  con Listas\n\n\tSeleccione una opcion\n\n\t1. Agregar elemento al frente\n\t2. Mostrar lista\n\t3. Borrar un elemento\n\t0. Salir\n");
		scanf("%d",&op); //Captura el numero opción selecionada.
		switch(op) //Ir a la opción indicada por el usuario.
		{
			//Ingresar un valor al comienzo de la lista.
		case 1:
		{
			int numNuevo;//Crear una variable para el numero a insertar en la lista.
			system("cls");//Borrar la pantalla.
			printf("Ingrese el numero para agregar a la lista:\n");//Pedir por pantalla un numero para insertar en la lista.
			scanf("%d",&numNuevo);//Capturar el número a insertar en la lista.
			system("cls");//Borrar la pantalla.
			insFront(&milista,numNuevo);//LLamara al procedimiento que inserta un numero al comienzo de la lista.
			getch(); //Esperar que el usuario presione una tecla.
			break;
		}
		//Mostrar la lista por pantalla.
		case 2:
		{
			system("cls");//Borrar la pantalla.
			//Mostrar en pantalla un titulo.
			printf("Los numeros cargados en la lista:\n\n");
			//Declarar un variable y asignarle el valor devuelto por la función  mostrar (0 Lista vacía 1Lista no vacia).
			int i = mostrar(milista);
			//Chequear si la lista esta vacía y mostrar en pantalla el exto que corresponda.
			if(i==0)printf("La lista esta vacia \n\n");
			else printf("# \n\n");
			//Esperar que el usuario presione una tecla.
			getch();
			break;
		}
		//Eliminar un número de la lista.
		case 3:
		{
			int n; //Crear un varible que almacene el número a borrar de la lista.
			system("cls");//Borrar la pantalla.
			printf("Ingrese el numero para borrar de la lista:\n"); //Pedir por pantalla un nuúmero para borrar de la lista.
			scanf("%d",&n); //Capturar el número a borrar de la lista.
			system("cls");//Borrar la pantalla.
			borrar(&milista,n); //LLamar a la función borrar.
			getch(); //Esperar que el usuario presione una tecla.
			break;
		}
		}
	}
	return 0;
}

void insFront (lista *L, int n){
	lista aux = malloc(sizeof(nodoL)); //Crear un nuevo nodo.
	aux -> info = n; //Asignar el valor al nodo.
	aux -> sig = *L; //Apuntar el nodo al nodo que apuntaba la lista.
	*L=aux; //Hacer que la lista apunte al nodo nuevo.
	printf("Se agrego el %d a la lista\n",n); //Escribir en pantalla que se agregó el valor a la lista.
}/* inserta el valor n al frente de la lista */

int mostrar(nodoL* L){
	//Crea y asigna 0 a la variable a devolver
	int i=0;
	//Preguntar si la lista no es vacia
	if (L!=NULL){
		//Asigna 1 a la variable i.
		i=1;
		//Muestra el valor actual en pantalla
		printf(" |%d|->",L->info);
		//Llama la función con el próximo valor.
		mostrar(L->sig);
	}
	//La función devulelve el resultado.
	return i;
}/*muestra por pantalla los valores de L, en forma recursiva retorna 0 para lista vacía y 1 para la lista con elementos*/

void borrar(lista *L, int n){
	lista aux = *L; //puntero auxiliar al primer nodo
	(*L) = (*L) -> sig; //hago apuntar l al siguiente nodo
	free(aux);   //elimino el primer nodo de la memoria
}