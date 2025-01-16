package kr.weple.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class MainController {

    @RequestMapping("/")
    public RedirectView defaultCallback() {

        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("http://localhost:5173/");
        return redirectView;
    }
}
