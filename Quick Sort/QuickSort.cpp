#include<iostream>

using namespace std;
int* QuickSort(int *Arr, int head, int tail){
    if(tail<=head){
        return Arr;
    }
    int pivot=Arr[tail];
    int i=head-1, j=head;
    while(Arr[j]!=pivot){
        if(Arr[j]<pivot){
            i++;
            int temp=Arr[j];
            Arr[j]=Arr[i];
            Arr[i]=temp;
            j++;
        }else{
            j++;
        }
    }
    int temp=Arr[i];
    Arr[i]=pivot;
    Arr[tail]=temp;
    int *LeftArray=QuickSort(Arr, head, i-1);
    int *RightArray=QuickSort(Arr, i+1, tail);
}
int main(){
    int Array[10]={5,6,9,8,1,3,4,0,2,7};
    cout<<QuickSort(Array, 0, 9);
}