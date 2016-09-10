// ==== JQUERY START ==== \\
$(document).ready(function(){
  console.log('running');
  $(function () {
    $('.tlt').textillate({
      loop: true,
      out: {
        effect: 'fadeOut',
        sync: false,
        shuffle: false, 
        reverse: true,
        callback: function() {}
          
      },
    });
  })
});
