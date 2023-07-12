package com.hanan.rest.webservices.restfulwebservices.todo.repo;

import com.hanan.rest.webservices.restfulwebservices.todo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findAllByUsername(String username);
}
