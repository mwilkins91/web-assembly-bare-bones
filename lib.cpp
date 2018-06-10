// lib.cpp
#include <iostream>
#include <emscripten.h>

extern "C" {

  EMSCRIPTEN_KEEPALIVE  
  int myFunc() {
    std::cout << "Hello WASM!" << std::endl;
    return 1;
  }
  
  EMSCRIPTEN_KEEPALIVE
  unsigned long int fib(unsigned long int n) {
    unsigned long int i, t, a = 0, b = 1;
    for (i = 0; i < n; i++) {
      t = a + b;
      a = b;
      b = t;
    }
    return b;
  }

  EMSCRIPTEN_KEEPALIVE 
  int count(int count) {
    int counter = 0;
    for(int i = 0; i < count; i++) {
      counter++;
    }
    return count;
  }
}