# Contraseña segura

Recemed necesita exigir a sus usuarios que ingresen contraseñas seguros, una contraseña segura debe cumplir lo siguiente:
- Debe contener al 6 caracteres
- Debe contener al menos 1 digito
- Debe contener al menos 1 letra minuscula
- Debe contener al menos 1 letra mayuscula
- Debe contener al menos 1 caracter especial

Dada una contraseña, crear una funcion que retorne la cantidad minima de caracteres a agregar para hacer la contraseña segura.

Considerer el siguiente codigo para la solucion

```javascript
const numbers='0123456789'
const lower_case='abcdefghijklmnopqrstuvwxyz'
const super_case='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const special_characters='!@#$%^&*()-+'

function minimunNumber(password) {
   // tu codigo
}
```

Ejemplos:

```minimunNumber("2bbb") // retorna 2``` --> A esta contraseña le falta una letra mayuscula, y un caracter especial, ademas debe cumplir los 6 caracteres minimos, por lo que el minimo de caracteres a agregar son 2(ej: password = "2bbbb#A")
```minimunNumber("Ab1") // retorna 3``` --> A esta contraseña le falta un caracter especial y ademas debe cumplir con los 6 caracteres minimos, por lo que el minimo de caracteres a agregar son 3 (ej: password="Ab1#xy")
```minimunNumber("#Recened") // retorna 1``` --> A esta contraseña le falta un digito por lo que el minimo de caracteres a agregar es 1 
(ej: password= "#Recemed1")
```minimunNumbe("#Receta1") // retorna 0```
