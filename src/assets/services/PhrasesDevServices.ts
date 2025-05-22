export const PhrasesDevServices = () => {
  const FRASES = [
    { texto: "Hay 10 tipos de personas en este mundo: las que entienden binario y las que no. ¿Lo pillaste? El binario solo tiene dos dígitos: 0 y 1." },
    { texto: "Lo mejor de Boolean es que, incluso si te equivocas, solo te equivocas un poco." },
    { texto: "Un hijo le preguntó a su padre programador por qué el sol sale por el este y se pone por el oeste. ¿La respuesta? ¡Funciona, no lo toques!" },
    { texto: "Copiar y pegar fue inventado por programadores para programadores." },
    { texto: "¿Qué es un algoritmo? Una palabra que usan los programadores cuando no quieren explicar lo que hicieron." },
    { texto: "El software, las iglesias y las catedrales son muy parecidos: primero los construimos y luego rezamos." },
    { texto: "Hay dos formas de escribir programas sin errores; solo el tercero funciona." },
    { texto: "Si la depuración es el proceso de eliminar errores, entonces programar es el proceso de colocarlos." },
    { texto: "¿La mejor manera de depurar un código? Borra el código." },
    { texto: "¿Cuál es la forma orientada a objetos para volverse rico? Herencia." },
    { texto: "¿Por qué el programador renunció a su trabajo? Porque no consiguió arreglos (un aumento)." },
    { texto: "Un programador tuvo un problema, decidió usar Java. Ahora tiene una ProblemFactory." },
    { texto: "El programador se quedó atascado en la ducha por las instrucciones del champú: hacer espuma, enjuagar, repetir." },
    { texto: "¿Qué le dijo el código Java al código C? No tienes clase." },
    { texto: "Dos bytes se encuentran. El primero pregunta: ¿Estás enfermo? El segundo responde: No, solo me siento un poco mal." },
    { texto: "Si debuggear es el proceso de remover errores de código, entonces programar es el proceso de ponerlos. (Edsger Dijkstra)" },
    { texto: "Reglas de la optimización: 1. No lo hagas. 2. (Solo para expertos) No lo hagas todavía. (Michael A. Jackson)" },
    { texto: "Primero resuelve el problema, después escribe el código." },
    { texto: "Cualquiera puede escribir un programa que una computadora entienda. Los verdaderos programadores escriben código que los humanos entienden. (Martin Fowler)" },
    { texto: "Los programas deben ser escritos para que las personas los lean y solo casualmente para que las máquinas los ejecuten." },
    { texto: "Sin requerimientos o diseño, programar es solo el arte de agregar errores a un archivo vacío. (Louis Srygley)" },
    { texto: "Cualquier código que no hayas mirado en los últimos seis meses bien podría haber sido escrito por otra persona. (Ley de Eagleson)" },
    { texto: "Es difícil encontrar un error en tu código cuando lo estás buscando, pero es mucho más difícil encontrarlo cuando asumes que tu código está libre de errores." },
    { texto: "Para entender la recursividad, primero hay que entender la recursividad." },
    { texto: "Escribe tu código como si la persona que lo fuera a mantener fuera un peligroso psicópata que sabe quién eres y dónde vives." }
  ];

  const getFrase = async (): Promise<string> => {
    const randomIndex = Math.floor(Math.random() * FRASES.length);
    return FRASES[randomIndex].texto;
  };

  return {
    getFrase,
  };
};
