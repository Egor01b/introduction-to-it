#include <stdio.h>

int *getFirstAndLast(int *array, int length)
{

    int first = array[0];
    int last = array[length - 1];
    int returnvalue[] = {first, last};
    return returnvalue;
}

int main()
{
    int ages[] = {10, 12, 15, 15, 17, 18, 18, 19, 20};
    int *firstandlast = getFirstAndLast(ages, sizeof(ages) / sizeof(ages[0]));

    printf("First: %d Last:%d %\n", 0, 1);
}