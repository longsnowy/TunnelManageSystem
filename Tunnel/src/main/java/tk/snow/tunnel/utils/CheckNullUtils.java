package tk.snow.tunnel.utils;

public class CheckNullUtils {
    public static String checkNull(String checkStr){
        if (checkStr!=null && checkStr.equals("")){
            return null;
        }
        else {
            return checkStr;
        }
    }
}
