function test(){
    alert("wellcome for guess check game you have 6 attempts");

    let random_num = Math.floor((Math.random()*50)+1); 
    alert(random_num);
    let user_input=[],compare_num=0;
    let user_attempts=" your attempts are:",game_result="";
    let attempts=6;

    for (let index = 1; index <=attempts; index++) {
        
        user_input[index-1]=window.prompt("attempt "+index +" : ")
        if (user_input[index-1]>50|| user_input[index-1]<1) {
            alert("please inter a numeber between 1-50");
            user_input[index-1]=window.prompt("attempt "+index +" : ")
        } else{
            if (user_input[index-1]==random_num) {
                game_result="Right Answer!\n ";
                break;
            } else  {
                compare_num=random_num - user_input[index-1];
                if (compare_num<=17&& compare_num>0) {
                    alert("little small !")
                } else if (compare_num>17 &&compare_num<=35) {
                    alert("  small !")
                } else if (compare_num>35) {
                    alert("too small !")
                } else if (-1*compare_num<=17) {
                    alert("little large !")
                } else if (-1*compare_num>17 && -1*compare_num<=35()) {
                    alert("  large !")
                } else if (-1*compare_num>35) {
                    alert("too large !")
                }
            if (index==attempts) {
                game_result="Game Over ! \n" ;
            }

            }
        }
    }

    for (let i = 0; i < user_input.length; i++) {
        user_attempts += user_input[i] +"  ";
    };
    alert(game_result + user_attempts);
    
};