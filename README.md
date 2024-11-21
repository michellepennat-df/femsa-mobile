# femsa-mobile

# Biblioteca de Componentes

### **Button**

- **Propósito:** Botón reutilizable
- **Características Clave:**
  - Soporta cualquier tipo de valor utilizando genéricos.
  - Propiedades opcionales: `onClick` y `disabled`.

### **List**

- **Propósito:** Renderiza una colección de elementos
- **Características Clave:**
  - Soporta tipos genéricos para los elementos.
  - Filtra elementos dinámicamente usando una función personalizada.

### **Input**

- **Propósito:** Campo de entrada con tipado estático
- **Características Clave:**
  - Maneja valores de tipo `string` o `number`.
  - Incluye manejo de errores para entradas inválidas.

## Ejemplos de uso
```
import { Button } from "./components/Button";

const onClickHandler = (value: string) => {
  console.log(`Valor: ${value}`);
};

<Button label="Enviar" value="test" onClick={onClickHandler} disabled={false} />;
```

```
import { List } from "./components/List";

const items = [1, 2, 3, 4];
const renderItem = (item: number) => `Elemento: ${item}`;

<List items={items} renderItem={renderItem} filterItems={(item) => item > 2} />;
```

```
import { Input } from "./components/Input";

const onChangeHandler = (value: string | number) => {
  console.log(`Nuevo valor: ${value}`);
};

<Input value="Texto" onChange={onChangeHandler} placeholder="Escribe aquí" />;
```
