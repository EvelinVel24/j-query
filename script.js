$(document).ready(function() {
  // Al hacer clic en "Ver más", mostrar el recuadro correspondiente
  $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id");
      var detallesId = "#detalles" + idBoton;
      
      // Mostrar el recuadro correspondiente y ocultar los demás
      $(".detalles").not(detallesId).hide(); // Ocultar otros recuadros
      $(detallesId).toggle(); // Alternar visibilidad del recuadro seleccionado
  });

  // Al hacer clic en el botón de cierre (X), ocultar el recuadro de detalles
  $(".btn-close").click(function() {
      $(this).closest(".detalles").hide();
  });
});
