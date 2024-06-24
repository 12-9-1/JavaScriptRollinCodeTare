const errorCodes = {
    404: {
      message: 'Página no encontrada',
    },
    500: {
      message: 'Error interno del servidor',
    },
    403: {
      message: 'Prohibido',
    },
    400: {
      message: 'Solicitud incorrecta',
    },
    503: {
      message: 'Servicio no disponible',
    },
    429: {
      message: 'Demasiadas solicitudes',
    },
  };
  
  const errorCodeElement = document.getElementById('error-code');
  const errorMessageElement = document.getElementById('error-message');
  
  // Obtenga el código de error del parámetro de consulta de URL query (e.g., ?code=404)
  const urlParams = new URLSearchParams(window.location.search);
  const errorCode = parseInt(urlParams.get('code')) || 404;
  
  // Establecer el código de error y el mensaje
  errorCodeElement.textContent = errorCode;
  errorMessageElement.textContent = errorCodes[errorCode].message;
  