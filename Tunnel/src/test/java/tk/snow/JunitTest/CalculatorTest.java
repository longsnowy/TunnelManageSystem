package tk.snow.JunitTest;

import org.junit.jupiter.api.Test;

public class CalculatorTest {
    @Test
    void add() {
        Calculator calculator = new Calculator();
        calculator.clear();
        calculator.add(100);
        System.out.println(new Calculator().getResult() + "");

        calculator.add(-10);
        System.out.println(new Calculator().getResult() + "");

        calculator.add(0);
        System.out.println(new Calculator().getResult() + "");


    }
}
