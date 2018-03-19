$(document).ready(function(){
  $('.select').click(function (e) {
    e.preventDefault();
    var a=this.getAttribute('href');
    var b=a+'n'
    $(a).tab('show');
    $(b).tab('show');
  });
  $('#excercises a').click(function (e) {
    e.preventDefault();
    var a='#'+this.getAttribute('id')+'n';
    $(a).tab('show');
    $(this).tab('show');
  });
});
