$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html = 
         //メッセージに画像が含まれる場合のHTML
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
      //メッセージに画像が含まれない場合のHTMLを作る
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
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
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
