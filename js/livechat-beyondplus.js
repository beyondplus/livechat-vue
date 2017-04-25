var app = new Vue({
      el: '#app',
      data: {
            session_id : "",
            salt_key : "",  
            result : [{
              user : "",
              text : ""
            }],
            data : {
              user : "",
              text : ""
            },
            start : null
      },
      methods: {
         serviceProvider : function() {
            var data = {user : "" , text : ""};
            this.$http.get('http://localhost/projects/livechat-vue/php/fetch.php', data ).then(response => {
              // get body data
              if(response.body != null) {
                this.result = response.body.data;
              }
              
            }, response => {
              // error callback
            });
         },
         liveChatOnClick: function() {
            this.start = window.setInterval(() => {
              this.serviceProvider()
            },1000);
            document.getElementById('live').style.display = "none";
            document.getElementById('livechatBox').style.display = "block";
         },
         queSubmit: function () {
            document.getElementById('que').style.display = "none";
            document.getElementById('live').style.display = "block";
         },
         liveChatClear: function() {
            window.clearInterval(this.start);
            document.getElementById('livechatBox').style.display = "none";
         },
         liveChatSubmit: function() {
            var data = { user : this.data.user , text : this.data.text };
            this.$http.post('http://localhost/projects/livechat-vue/php/fetch.php', data ,  {
               emulateJSON: true
            }).then(response => {
              this.result = response.body.data;
              this.data.text = ""
            }, response => {

            });
         }
      },
      mounted() { 
      }
  });