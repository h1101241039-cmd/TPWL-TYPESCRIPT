// src/tugas2.ts

// Membuat interface Buku
interface Buku {
  judul: string;
  pengarang: string;
  tahunTerbit: number;
  tersedia: boolean;
}

// Membuat objek berdasarkan interface
const buku1: Buku = {
  judul: "Belajar TypeScript",
  pengarang: "pak Syahru",
  tahunTerbit: 2024,
  tersedia: true
};

// Menampilkan semua properti
console.log("Judul:", buku1.judul);
console.log("Pengarang:", buku1.pengarang);
console.log("Tahun Terbit:", buku1.tahunTerbit);
console.log("Tersedia:", buku1.tersedia);