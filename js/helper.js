// Generador random de Numeros
  let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
// Obtener la distancia de dos puntos
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
// Devolver un strig dependiendo las distancias 
  let getDistanceHint = distance => {
    if (distance < 60) {
      return "MUY CALIENTE";
    } else if (distance < 90) {
      return "CALIENTE";
    } else if (distance < 1400) {
      return "TIBIO";
    } else if (distance < 200) {
      return "FRIO";
    } else if (distance < 360) {
      return "TE ESTA CONGELANDO";
    } else {
      return "CONGELADO";
    }
  }
  