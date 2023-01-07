package com.br.misslegame.controllers;

import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.misslegame.Employee;

@RestController
@RequestMapping("/api/")
public class c1 {

    @GetMapping("/employees")
    @CrossOrigin (origins = "http://localhost:8081")
    public ResponseEntity<Employee> cc1 (){
        Employee employee = new Employee("Ghianzao", "Morelli", "The best");
        return ResponseEntity.ok(employee);
    }
}