    $(function(){
        $('.ed_minus').click(function(){
            var ed_num = parseInt($(this).next().text());
            if(ed_num > 1){
                $(this).next().text(ed_num-1);
            }
        })
        $('.ed_plus').click(function(){
            var ed_num = parseInt($(this).prev().text());
            $(this).prev().text(ed_num+1);
        })
    })   
    /*全选*/
    $(function() {
      $('.ep_total label').click(function(){
        var radioId = $(this).attr('name');
        $(this).toggleClass('checked');
        if($(this).hasClass('checked')){
            $('#' + radioId).attr('checked', 'checked');
            $('.cart_choose label').addClass('checked');
            $("[name='cart_check']").attr('checked', 'true');
        }
        else{
            $('#' + radioId).removeAttr('checked');
            $('.cart_choose label').removeClass('checked');
            $("[name='cart_check']").removeAttr('checked');
        }
      });
    }); 

    /*checkbox*/
    $(function() {
      $('.cart_choose label').click(function(){
        $(this).toggleClass('checked');
        if($(this).hasClass('checked')){
            $(this).prev().attr('checked', 'true');
        }
        else{
            $(this).removeClass('checked');
            $(this).prev().removeAttr('checked');
        }
      });
    });
