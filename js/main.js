$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.header').css({'background':'#006414','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      }else{
        $('.header').css({'background':'none','box-shadow':'none'});
      }
    });
  
  
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  
  
  
  });

  function enviarEmail() {
    // Recupera os valores dos campos do formulário
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Constrói o corpo do email
    var body = "Nome: " + firstName + " " + lastName + "\n";
    body += "Email: " + email + "\n\n";
    body += "Mensagem: \n" + message;
  
    // Monta o link de envio de email
    var subject = "Contato via site - Sustenta Recife";
    var mailtoLink = "mailto:annabeatryz12345@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);
  
    // Abre o cliente de email padrão do usuário com os campos preenchidos
    window.location.href = mailtoLink;
  }