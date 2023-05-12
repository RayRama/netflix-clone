- Private variabel hanya bisa diakses didalam scopenya saja, jadi jika kita ingin mengakses variabel tersebut diluar scope kita harus menggunakan method getter dan setter. Isinya pun akan direset ketika memanggilnya dimethod lain. Karena itu adalah bentuk dari keamanan data (enkapsulasi).
- Tidak bisa menggunakan useAtom atau hook lainnya didalam class karena aturan react hooks. Harus menggunakan cara seperti berikut

```js
constructor() {
  this.state = {
    contohState: 0,
  };
}
```

- Kemungkinan, setiap atribut / variabel akan direset ketika dipanggil di fungsi yang berbeda misalnya

```js
function contoh1() {
  user.subs(true);
  console.log(user.getSubs); // true
}

function contoh2() {
  console.log(user.getSubs); // false
}
```

Solusinya adalah dengan menggunakan useState atau useAtom
