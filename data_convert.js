var date_sys;
function date_now() {
    var date = new Date();
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
    //var year = date.getFullYear() + 543;
    var year = date.getFullYear();
 
    date_sys = day + "/" + month + "/" + year;
    $('[name=SW50082_format1]').val(date_sys);
  
}
function convertdate8(dates){

        if(dates == "" || dates == "null" || dates == null){
            return "";
        }else{
            var date_arr = dates;

            // console.log("date_arr : "+date_arr);
            // console.log("============================");


            var day = date_arr.substring(6, 8);
            var month = date_arr.substring(4, 6);
            var year = date_arr.substring(0, 4);

            
            // console.log("day : "+day);
            // console.log("month : "+month);
            // console.log("year : "+year);
            //return parseInt(date_arr[2]-543)+"-"+date_arr[1]+"-"+date_arr[0];
            return day+"/"+month+"/"+(parseInt(year)+543);
        }
        
    }

    function convertdate_ins(dates){

    var date_arr = new Array();
    var regex = new RegExp("/","i");

        if(dates.search(regex) != -1){

            date_arr = dates.split("/");
            if(dates == "" || dates == "null" || dates == null){
            
                }else{

                return parseInt(date_arr[2]-543)+""+date_arr[1]+""+date_arr[0];
             }
        }else{
                return dates;
        }
       
        
  }

    function convertdate_show(dates){

    var date_arr = new Array();
    var regex = new RegExp("-","i");

        if(dates.search(regex) != -1){

            date_arr = dates.split("-");
            if(dates == "" || dates == "null" || dates == null){
            
                }else{

                return date_arr[2]+"/"+date_arr[1]+"/"+(parseInt(date_arr[0])+543);
             }
        }else{
                return dates;
        }
       
        
  }