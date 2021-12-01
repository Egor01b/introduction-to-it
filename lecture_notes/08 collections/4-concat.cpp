#include <stdio.h>

int *concat(int *arr1, int length1, int *arr2, int length2)
{

  int length = length1 + length2;
  int *ages = new int[length];

  for (int i = 0; i < length1; i++)
  {
    ages[i] = arr1[i];
  }

  for (int i = 0; i < length2; i++)
  {
    ages[i + length1] = arr2[i];
  }
  return ages;
}

int main()
{
  int schoolAges[] = {
      10,
      12,
      15,
      15};
  int studentAges[] = {
      17,
      18,
      18,
      19,
      20};

  int schoolLength = sizeof(schoolAges) / sizeof(int);

  int studentLength = sizeof(studentAges) / sizeof(int);

  int length = (schoolLength + studentLength);

  int *ages = concat(schoolAges, schoolLength, studentAges, studentLength);

  for (int i = 0; i < length; i++)
  {
    printf("ages[%d]: %d\n", i, ages[i]);
  }
  delete ages;
}
