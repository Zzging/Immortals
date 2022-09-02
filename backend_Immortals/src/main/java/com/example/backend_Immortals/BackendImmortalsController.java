package com.example.backend_Immortals;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class BackendImmortalsController {
    
    @GetMapping ("/hello-world")
    public String helloWorld(){
        return "Hello World";
    }
}
