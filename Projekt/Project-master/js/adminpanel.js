var chapt=document.getElementById('optSel').innerHTML;
$(document).ready(function(){
  $('#tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
  $('#edit #returnBtn').click(function(e) {
    e.preventDefault();
      $('#browseOpt').tab('show');
  });
  var id;
//Przelaczanie editLink
  $('#tab-cont .editBtn').click(function(e) {
    var a=this;
    edit(e,a);
  });
//Przełączanie blokow
  $('#optList button.list-group-item-action').click(function () {
    $('#optList .active').removeClass('active');
    $(this).addClass('active');
    $( "#optSel" ).animate({opacity: 0,},'fast', function() {
    $('#optSel').hide();
    $('.load').show();
    $( ".load" ).animate({opacity:1,},'fast',function(){
    $('.load').animate({
      opacity:0,
    },'fast',function() {
      $('.load').hide();
      $('#optSel').show();
      $('#optSel').animate({
          opacity:1,
      },'fast');
    });



  });
  });

    //TUTAJ WSTAWIANIE BLOKU
  });
  //Usuwanie z bazy
  $('td .close').click(function(e) {
    var a=this;
    del(e,a);


  });
  //Dodawanie do bazy
  $('#add #addBtn').click(function(e){
    var alertMsg='<div class="alert alert-success alert-dismissible fade show">Adding accomplished<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>'
    $('#alertBox').append(alertMsg);
    var insRow='<tr><td class="id">3</td><td class="cNo">'+$('#addChapterNo').val()+'</td><td class="cName">'+$('#addChapterName').val()+'</td><td><a href="#" class="editBtn">Edit</a></td><td class="deleteBtn"><button type="button" class="close"><span>&times;</span></button></td></tr>'
    $('#field').append(insRow);
    $('#tab-cont .editBtn').click(function() {
      var a=this;
    edit(e,a);
});
    $('#tab-cont td .close').click(function(e) {
  var a=this;
  console.log(a);
  del(e,a);
});
  });
  //Update na bazie
  $('#edit #saveBtn').click(function(){
    var alertMsg='<div class="alert alert-success alert-dismissible fade show">Editing accomplished<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>'
    $('#alertBox').append(alertMsg);
    var insRow='<td class="id">'+id+'</td><td class="cNo">'+$('#editChapterNo').val()+'</td><td class="cName">'+$('#editChapterName').val()+'</td><td><a href="#" class="editBtn">Edit</a></td><td class="deleteBtn"><button type="button" class="close"><span>&times;</span></button></td>';
    var a=document.querySelectorAll('.id');
    for(var i=0;i<a.length;i++){
      if(a[i].innerHTML==id){
        a[i].parentNode.innerHTML=insRow;
        $('#tab-cont .editBtn').click(function(e) {
          var a=this;
        edit(e,a);
          });
        $('td .close').click(function(e) {
          var a=this;
          del(e,a);
        });

      }
    }


    //UPDATE KODU Z BAZY ORAZ TABELI
  });

function edit(e,a) {
  e.preventDefault();
  $('#editOpt').tab('show');
  id=$(a).parent().siblings(".id").text();
  var cName=$(a).parent().siblings(".cName").text();
  var cNo=$(a).parent().siblings(".cNo").text();
  console.log(cNo);
  elCNo=  $('#editChapterNo').val(cNo);
  elCName=$('#editChapterName').val(cName);
  $('#editChapterId').val(id);

}
});
function del(e,a) {
  var alertMsg='<div class="alert alert-success alert-dismissible fade show">Deleting accomplished<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>'
  $(a).parents('tr').addClass('noDisp');
  $('#alertBox').append(alertMsg);
}

//Filtrowanie
var tab=document.getElementById("tab-search")
var input=tab.getElementsByTagName("input");
for(var i=0; i<input.length;i++){
  input[i].addEventListener('input',szuk);
}
function szuk(){
  var input, filter, table, tr, td, i,j;
  if(this.value==""){
      table = document.getElementById("tab-cont");
      tr = table.getElementsByTagName("tr");
    for(i=0;i<tr.length;i++){
      tr[i].style.display = "";
    }
  }else{
      input = document.getElementsByTagName("input");
      filter = this.value.toUpperCase();
      for(var i=0; i<input.length;i++){
        if(this==input[i])
        {
          j=i+1;
        }else{
          input[i].value='';
        }
      }
      table = document.getElementById("tab-cont");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[j];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
}









//
