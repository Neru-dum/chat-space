$(function(){
  var buildHTML = function(contents__messages) {
    if (contents__messages.content && contents__messages.image) {
      var html = 
      `<div class="contents__messages" data-contents--message-id=` + contents__messages.id + `>` +
          `<div class="contents__messages__chat1">` +
              contents__messages.user_name +
              
              `<div class="contents__messages__date1">` +
                contents__messages.created_at +
              `</div>` +
           `</div>` +
        `<div class="contents__messages__message1">` +
          `<p class="lower-message__content">` +
          contents__messages.content +
          `</p>` +
          `<img src="` + contents__messages.image + `" class="lower-message__image" >` +
        `</div>` +
      `</div>`
    } else if (contents__messages.content) {
      var html = 
      `<div class="contents__messages" data-contents--message-id=` + contents__messages.id + `>` +
          `<div class="contents__messages__chat1">` +
                contents__messages.user_name +
                `<div class="contents__messages__date1">` +
                  contents__messages.created_at +
                `</div>` +
          `</div>` +
          `<div class="contents__messages__message1">` +
            `<p class="lower-message__content">` +
            contents__messages.content +
            `</p>` +
          `</div>` +
      `</div>`
    } else if (contents__messages.image) {
      var html = 
      `<div class="contents__messages" data-contents--message-id=` + contents__messages.id + `>` +
          `<div class="contents__messages__chat1">` +
          contents__messages.user_name +
          
            `<div class="contents__messages__date1">` +
            contents__messages.created_at +
            `</div>` +
        `</div>` +
        `<div class="contents__messages__message1">` +
          `<img src="` + contents__messages.image + `" class="lower-message__image" >` +
        `</div>` +
      `</div>`
    };
    return html;
  };

  var reloadMessages = function() {
    last_message_id = $('.contents__messages:last').data("contents--message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(contents__messages) {
      if (contents__messages.length !== 0) {
        var insertHTML = '';
        $.each(contents__messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.contents__main').append(insertHTML);
        $('.contents__main').animate({ scrollTop: $('.contents__main')[0].scrollHeight});
      }
    })
    .fail(function() {
      console.log('error');
    });
  };
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
 if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
 }
});
