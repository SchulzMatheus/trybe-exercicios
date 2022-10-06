const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    console.log('Returned planet: ', mars);
  };
  
  setTimeout(() => {
    getPlanet(); 
  }, 4000); // Imprime Marte depois de 4 segundos

  const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
    const marsTemperature = `A temperatura de marte é: ${getMarsTemperature()}.`
    console.log(marsTemperature);
}; // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
sendMarsTemperature();