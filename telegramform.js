$(document).ready(function () {
    $("form-element").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var message = $(formNm).find(".form-message");
        var formTitle = $(formNm).find(".form-title");
        $.ajax({
            type: "POST",
            url: './send-message-to-telegram.php',
            data: formNm.serialize(),
            success: function (data) {
              // Вывод сообщения об успешной отправке
              index.html(data);
              styles.css("display","none");
              setTimeout(function(){
                styles.css("display","block");
                index.html('');
                $('input').not(':input[type=submit], :input[type=hidden]').val('');
              }, 3000);
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                index.html(error);
                styles.css("display","none");
                setTimeout(function(){
                  styles.css("display","block");
                  index.html('');
                  $('input').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
});