#include <vector>
#include <cstdio>

int main()
{
    std::vector<int> ages = {10, 12, 15, 15, 17, 18, 18, 19, 20};
    ages.pop_back();
    ages.push_back(19);

    std::vector<int>::iterator it;
    it = ages.begin();



    ages.insert(it + 4, 5);

    ages.erase(it);

    int first = ages[0];
    int length = ages.size();
    int last = ages[length - 1];

    printf("first: %d\n", first);
    printf("last: %d\n", last);
}
