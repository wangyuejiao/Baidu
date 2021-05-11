$(document).ready(function(){
    //获取用户名
    $username=$('#username');
    //用户名提示框
    $user=$('.user');
    //用户名下的提示框
    $usernull=$('#usernull');

    //获取电话
    $tel=$('#tel');
    //获取电话下的输入框
    $phonenull=$('#phonenull');

   //获取密码
   $pwd=$('#pwd');
   //密码上的提示框
   $password=$('.password');
   //密码下的提示框
   $pwdnull=$("#pwdnull");

   //获取验证码
   $right9=$('.right9');
   //获取验证码下的提示
   $manull=$('#manull')


   //验证码验证
   var seconds=10;
   $right9.click(function(){
       console.log('1')
       var timer=setInterval(function(){
           seconds--;
           if(seconds==-1){
               clearInterval(timer);
               $right9.val('发送验证码');
               $right9.removeAttr('disabled');
               seconds = 10;
               $manull.css('display','block')
               console.log(2);
           }
           else{
               $right9.val('重新发送（'+seconds+'s)');
               $right9.attr('disabled','true');
               console.log(3)
           }
       },1000)

   })


   //用户名验证
   //获取焦点
   $username.focus(function(){
       $user.css('display','block')
   })
   //数数
   function count(u){
       var username1=u;
       var arrayname=new Array();
       arrayname=username1.split('');
       var len = 0;
       var utf8 = new TextEncoder('utf-8');
       for(var i = 0;i<arrayname.length;i++){
            if(utf8.encode(arrayname[i]).length === 1){
                len += 1;
            }
            else if(utf8.encode(arrayname[i]).length === 3){
                len += 2;
            }
        }
        return len;
   }
   //失去焦点进行空字符串判断
   $username.blur(function(){
    $user.css('display','none');
    var name=$username.val();
    //调用数数函数进行输入用户名个数判断
    var length=count(name);
    //进行个数判断
    if(name===''){
        $usernull.html('用户名不为空');
    }
    else if(length>14){
        $usernull.html('用户名不能超过7个汉字或14个字符')
    }
    else if(length > 0 && length<= 14 && !(/^[0-9]*$/).test(name) && (/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/).test(name)){
        $usernull.html('');
    }
    else if((/^[0-9]*$/).test(name)){
        $usernull.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
    }
    else if(!(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/).test(name)){
        $usernull.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
    }
   })
   



   //手机号码格式验证
   $tel.blur(function(){
    var tel = $tel.val();
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if(reg.test(tel)){
        $phonenull.html('');
    }
    else{
        $phonenull.html('手机号码格式不正确');
    }
   })


   //密码验证
   $pwd.focus(function(){
       $password.css('display','block');
   })
   $pwd.blur(function(){
    $password.css('display','none');
    var pwd1 = $pwd.val();
    var reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/;
    if(pwd1 !=''&&reg.test(pwd1)){
        $pwdnull.html('');
    }
    else{
        $pwdnull.html('密码设置不符合要求');
        $pwdnull.css('display','block');

    }
   })
})