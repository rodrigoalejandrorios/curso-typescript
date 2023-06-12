type Perro = {
  nombrePerro: string;
  edad: number;
  ladra: boolean;
};

type Gato = {
  nombreGato: string;
  edad: number;
  tepra: boolean;
};

type SeleccionAnimal<T extends "perro" | "gato"> = T extends "perro"
  ? Perro
  : Gato;

function seleccionAnimal<T extends "perro" | "gato">(
  animal: SeleccionAnimal<T>
) {
  console.log(animal);
}


// seleccionAnimal<'gato'>({

// })