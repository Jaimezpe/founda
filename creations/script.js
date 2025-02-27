function esDispositivoMovil() {
    return /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
  }

  if (esDispositivoMovil()) {
    alert('Probablemente no se pueda ver bien la página web en este dispositivo. Prueba a ponerlo en horizontal');
  }