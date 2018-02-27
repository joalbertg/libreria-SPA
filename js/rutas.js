(function(window, document) {
  libreria.getID('vista')
    .enrutar()
    .ruta('/', 'vistas/inicio.html', null, null)
    .ruta('/crear-contacto', 'vistas/contactos/crear.html', 'contacto', function() {
      _.getID('crearContacto').noSubmit();
    })
    .ruta('/listar-contacto', 'vistas/contactos/listar.html', 'contacto', function() {
      _.getCtrl().listar();
    })
    .ruta('/actualizar-contacto', 'vistas/contactos/actualizar.html', 'contacto', function() {
      _.getID('frmActualizar').noSubmit();
      _.getCtrl().prepararActualizacion();
    });
})(window, document);
