$(function(){
  function buildHTML(message){

    if (message.image) {
      var html = 
            `<div class="contents__messages">
              <div class="contents__messages__chat1">
                ${message.user_name}
              </div>
              <div class="contents__messages__date1">
                ${message.created_at}
              </div>
            </div>
            <div class="contents__messages__message1">
              <p class="lower-message__content">
                ${message.content}
              </p>
               <img src=${message.image} >
            </div>`
     return html;
    } else {
      var html = 
       ` <div class="contents__messages">
          <div class="contents__messages__chat1">
            ${message.user_name}
          </div>
          <div class="contents__messages__date1">
            ${message.created_at}
          </div>
        </div>
        <div class="contents__messages__message1">
          <p class="lower-message__content">
           ${message.content}   
          </p>
        </div>`
    return html;
    };
  }

  
$('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url      = $(this).attr('action');
    $.ajax({
      url: url,  
      type: 'POST',  
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.contents__main').append(html);
        $('.contents__main').animate({ scrollTop: $('.contents__main')[0].scrollHeight});
        $('#new_message')[0].reset();
        $('.input-form__submit').prop('disabled',false);
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      });
})
});
