# E-COMMERCE APP

- Designlah app sederhana menggunakan react component

Buatlah:

- Halaman product menampilkan semua product yang ada

Requirement:

- Pada component product terdapat tombol "beli" dimana tombol beli ini hanya muncul ketika stock lebih besar dari 0

- Tampilkan price dengan format IDR (**HINT: keyword bisa dicari dengan "number to currency format in js"**) 

- Gunakanlah salah satu UI Framework untuk melakukan styling pada e-commerce app kalian


# DOKUMENTASI SERVER
- URL:
    - http_method: GET
    - `http://movie-app-g2.herokuapp.com/products`
  - Expected response (status: `200`):
    ```json
      {
        "_id": "...",
        "product": "...",
        "desc": "...",
        "image": "...",
        "stock": "...",
        "price": "..."
      }
    ```