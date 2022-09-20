package tk.snow.JunitTest;
import org.junit.jupiter.api.Test;

class JunitTest {

    @Test
    void testAbs() {
        System.out.println(new File().abs(-150) + "");
        System.out.println(new File().abs(150) + "");
        System.out.println(new File().abs(0) + "");
    }

}
