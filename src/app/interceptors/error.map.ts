
export const statusError: Map<number, string> = new Map([
  [ 401, 'Usted no esta autorizado'],
  [ 400, 'Los parametros enviados son incorrectos'],
  [ 404, 'La informaciónsolitada no esta disponible'],
]);

export const customError: Map<string, string> = new Map([
  [ 'ERR50001', 'message personalizado 1'],
  [ 'ERR50002', 'message personalizado 2'],
  [ 'ERR50003', 'message personalizado 3'],
]);
