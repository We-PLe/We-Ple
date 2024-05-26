package kr.weple.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

    @GetMapping("/api/hello")
    @ResponseBody
    public String connectTest() {
        return "hello, react. I'm spring";
    }
}
