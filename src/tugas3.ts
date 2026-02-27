// src/tugas3.ts

class Lingkaran {
  jariJari: number;

  constructor(jariJari: number) {
    this.jariJari = jariJari;
  }

  hitungLuas(): number {
    return Math.PI * this.jariJari ** 2;
  }
}

// Membuat objek
const lingkaran1 = new Lingkaran(7);

// Menampilkan luas
console.log("Luas lingkaran:", lingkaran1.hitungLuas());