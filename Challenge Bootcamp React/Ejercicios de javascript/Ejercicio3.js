function guardarEnArray(N, A) {
  for (let i = 0; i < N; i++) {
    A[i] = Math.floor(Math.random() * N + 1);
  }
}

let A = [];

let N = prompt("Cuantos datos desea guardar: ");

guardarEnArray(N, A);

console.log(A);
