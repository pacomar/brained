/* Carga de paginas*/
function cargaBox(menuOption) {
  $("#BOX").load("/"+menuOption);
}

function cargaBox_modal(menuOption){
	$('#BOX_modal').addClass("BOX_modal_activado");
  $(".BOX_modal_activado").css("background-color", "rgba(0, 0, 0, 0.8)");
  /*$("#BOX_modal").load(menuOption+".html");*/
  /*$("#BOX_modal").append("<div id='BOX_modal-login-Clientes'></div>");*/
  /*$("#BOX_modal-login-Clientes").addClass("BOX_modal-login-Clientes_Transition");*/
  /*$(".BOX_modal").animate({opacity:'0.5'});*/
  if(menuOption=='loginc'){
    $("#BOX_modal").load("/loginc",function(){
      $("#BOX_modal-login-Clientes").css("top","50%");
    });
  }else{
    $("#BOX_modal").load("/logint",function(){
      $("#BOX_modal-login-Team").css("top","50%");
    });
  }    

  $("#BOX_modal").click(function (e) {
    if (e.target.id == 'BOX_modal'){
      $('#BOX_modal').css("background-color", "rgba(0, 0, 0, 0.1)");
      $('#BOX_modal').removeClass("BOX_modal_activado");
      $('#BOX_modal').text('');/*Borrar cont*/
    }
  });
}

function cargaBox_Soluciones_box_general(menuOption) {
  $("#Soluciones-box_general").load("/soluciones/"+menuOption);
}
/* --------------------------CAMBIOS EN EL CSS --------------------------*/

/* HEADER */
function withFondoHeader_largo(){
  document.getElementById('Box_Fondo_menu_Header').style.width='1195px'
}
function withFondoHeader_corto(){
  document.getElementById('Box_Fondo_menu_Header').style.width='auto'
}
/*---------------------- ESTADO DE LOS BOTONES ----------------------------*/
function Soluciones_nav_general_boton(){
  $("#Soluciones-nav_general .Soluciones-nav_general_boton").click(function() {
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
  });
}
function Soluciones_sidebar_btn(){
  $(".Soluciones-box_sidebar .Soluciones-sidebar-btn").click(function() {
    $(this).addClass("active");
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
  });
}
/*---------------------- PAGE ProwProjects ----------------------------*/
function ProwProjects_nav_general_boton()
    {
        $("#ProwProjects-nav_general .ProwProjects-nav_general_boton").click(function() {
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        });
    }
function ProwProjects_sidebar_btn()
    {
        $(".ProwProjects-box_sidebar .ProwProjects-sidebar-btn").click(function() {
        $(this).addClass("active");
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        });
    }
function cargaBox_ProwProjects_box_general(menuOption) {
  $("#ProwProjects-box_general").load("/soluciones/"+menuOption);
}

/*---------------------- PAGE Prod Servi ----------------------------*/
function Prod_Servi_nav_general_boton(){
  $("#Prod_Servi-nav_general .Prod_Servi-nav_general_boton").click(function() {
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
  });
}
function Prod_Servi_sidebar_btn(){
  $(".Prod_Servi-box_sidebar .Prod_Servi-sidebar-btn").click(function() {
    $(this).addClass("active");
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
  });
}
function cargaBox_Prod_Servi_box_general(menuOption) {
  $("#Prod_Servi-box_general").load("/soluciones/"+menuOption);
}
/*---------------------- PAGE Login Clients ----------------------------*/
function changueBoxC(option){
  if(option == "login"){
    $("#singupC").removeClass("active");
    $("#loginC").addClass("active");
    $("#registro").hide();
    $("#login").show();
  }else{
    $("#loginC").removeClass("active");
    $("#singupC").addClass("active");
    $("#login").hide();
    $("#registro").show();
  }
}
function changueBoxT(option){
  if(option == "login"){
    $("#singupT").removeClass("active");
    $("#loginT").addClass("active");
    $("#registro").hide();
    $("#login").show();
  }else{
    $("#loginT").removeClass("active");
    $("#singupT").addClass("active");
    $("#login").hide();
    $("#registro").show();
  }
}