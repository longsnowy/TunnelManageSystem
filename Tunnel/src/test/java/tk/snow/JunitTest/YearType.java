package tk.snow.JunitTest;

public class YearType {

    public String isLeap(int year){
        int remainder1=year%4;
        int remainder2=year%100;
        int remainder3=year%400;
        if((remainder1 ==0 && remainder2 !=0) || remainder3==0){
            return year+"是闰年";
        }else{
            return year+"不是闰年";
        }
    }


}
