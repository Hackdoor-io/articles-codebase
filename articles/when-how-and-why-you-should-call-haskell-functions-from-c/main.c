#include <HsFFI.h>
#ifdef __GLASGOW_HASKELL__
#include "main_stub.h"
#endif
#include <stdio.h>

int main(int argc, char *argv[])
{
    int i;
    hs_init(&argc, &argv);

    i = fibonacci_hs(42);
    printf("Fibonacci from Haskell: %d\n", i);

    hs_exit();
    return 0;
}