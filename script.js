function esDispositivoMovil() {
    return /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
  }

  if (esDispositivoMovil()) {
    alert('lapaginaweb.com dice: Probablemente no se pueda ver bien la página web en este dispositivo.');
  }