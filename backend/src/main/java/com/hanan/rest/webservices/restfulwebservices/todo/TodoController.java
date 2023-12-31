package com.hanan.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {
    @Autowired
    private TodoService todoService;
    @GetMapping("/users/{username}/todos")
    public List<Todo> todos(@PathVariable String username){
        return todoService.findByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo todos(@PathVariable String username, @PathVariable int id){
        return todoService.findById(id);
    }

    @PostMapping ("/users/{username}/todos")
    public Todo createTodo(@PathVariable String username, @RequestBody Todo todo){
        todo.setUsername(username);
        todo.setId(null);
        Todo createdTodo = todoService.addTodo(todo);
        return createdTodo;
    }

    @PutMapping("/users/{username}/todos/{id}")
    public Todo updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
        todoService.updateTodo(todo);
        return todo;
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id){
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
