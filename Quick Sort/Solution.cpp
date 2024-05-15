#include <iostream>
using namespace std;

void Swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int Partition(int Arr[], int head, int tail) {
    int pivot = Arr[tail];
    int i = head - 1;
    for (int j = head; j < tail; j++) {
        if (Arr[j] < pivot) {
            i++;
            Swap(Arr[i], Arr[j]);
        }
    }
    Swap(Arr[i + 1], Arr[tail]);
    return i + 1;
}

void QuickSort(int Arr[], int head, int tail) {
    if (head < tail) {
        int pivotIndex = Partition(Arr, head, tail);
        QuickSort(Arr, head, pivotIndex - 1);
        QuickSort(Arr, pivotIndex + 1, tail);
    }
}

int main() {
    int Array[10] = {5, 6, 9, 8, 1, 3, 4, 0, 2, 7};
    QuickSort(Array, 0, 9);
    for (int i = 0; i < 10; i++) {
        cout << Array[i] << " ";
    }
    return 0;
}
