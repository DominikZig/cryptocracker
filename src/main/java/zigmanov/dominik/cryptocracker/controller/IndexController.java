package zigmanov.dominik.cryptocracker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController
{
        @RequestMapping("/")
        public String index()
        {
            return "Spring Boot Example";
        }
}
