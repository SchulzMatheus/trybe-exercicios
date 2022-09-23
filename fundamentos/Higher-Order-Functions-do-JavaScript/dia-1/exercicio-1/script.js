const newEmployees = () => {
    const employees = {
      id1: employeData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employeData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employeData('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const employeData = (name) => {
    return {
        nomeCompleto: name,
        email: `${name.replace(' ', '_').toLowerCase()}@trybe.com`,
    }
  }

  console.log(newEmployees());