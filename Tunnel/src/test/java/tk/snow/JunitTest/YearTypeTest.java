package tk.snow.JunitTest;

import org.junit.jupiter.api.Test;

public class YearTypeTest {
    @Test
    void yearTest(){
        YearType yearType = new YearType();
        System.out.println(yearType.isLeap(2010));
        System.out.println(yearType.isLeap(2012));
        System.out.println(yearType.isLeap(2009));
        System.out.println(yearType.isLeap(2008));
        System.out.println(yearType.isLeap(2022));
    }
}
