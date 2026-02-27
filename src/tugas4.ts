// src/tugas4.ts

function sapaan(input: string | number): string {
  if (typeof input === "string") {
    return `Halo, ${input}`;
  } else {
    return `Umur: ${input} tahun`;
  }
}

// Contoh penggunaan
console.log(sapaan("Dina"));
console.log(sapaan(21));