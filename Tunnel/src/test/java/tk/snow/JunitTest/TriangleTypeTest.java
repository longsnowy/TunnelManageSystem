package tk.snow.JunitTest;

import org.junit.jupiter.api.Test;

public class TriangleTypeTest {
    @Test
    void yearTest(){
        TriangleType triangleType = new TriangleType();
        System.out.println(triangleType.triangleType(20,15,66));
        System.out.println(triangleType.triangleType(16,18,22));
        System.out.println(triangleType.triangleType(15,15,15));
        System.out.println(triangleType.triangleType(15,15,66));
        System.out.println(triangleType.triangleType(-20,15,66));

    }
}
