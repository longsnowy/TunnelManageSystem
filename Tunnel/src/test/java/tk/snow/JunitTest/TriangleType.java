package tk.snow.JunitTest;

public class TriangleType {

    public String triangleType(double a,double b,double c){
        if (a==b&&a==c&&b==c){
            return "三角形" + a+ " " + b + " "+ c + "是等边三角形";
        }else if(a == b || a == c || b == c){
            return "三角形" + a+ " " + b + " "+ c + "是等腰三角形";
        }else {
            return "三角形" + a+ " " + b + " "+ c + "是一般三角形";
        }
    }


}
