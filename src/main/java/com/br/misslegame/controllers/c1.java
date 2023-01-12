package com.br.misslegame.controllers;

import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.misslegame.Employee;
import com.br.misslegame.models.NewLoc;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/")
public class c1 {

    @GetMapping("/employees")
    @CrossOrigin (origins = "http://localhost:8081")
    public ResponseEntity<Employee> cc1 (){
        Employee employee = new Employee("Ghianzao", "Morelli", "The best");
        return ResponseEntity.ok(employee);
    }

    NewLoc backNewLoc = new NewLoc();
    @PostMapping("/postNewLoc")
    @CrossOrigin (origins = "http://localhost:8081")
    public ResponseEntity<String> newLoc(@Valid @RequestBody NewLoc newLoc) {
        backNewLoc.setXInit(newLoc.getXInit());
        backNewLoc.setYInit(newLoc.getYInit());
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/getCurrentLoc")
    @CrossOrigin (origins = "http://localhost:8081")
    public ResponseEntity<
    
    
}