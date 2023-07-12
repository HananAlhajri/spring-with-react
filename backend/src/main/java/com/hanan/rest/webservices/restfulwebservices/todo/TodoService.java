package com.hanan.rest.webservices.restfulwebservices.todo;
import java.util.List;

import com.hanan.rest.webservices.restfulwebservices.todo.repo.TodoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
	@Autowired
	private TodoRepository todoRepo;
	
	public List<Todo> findByUsername(String username){
		return todoRepo.findAllByUsername(username);
	}
	
	public Todo addTodo(Todo todo) {
		return todoRepo.save(todo);
	}
	
	public void deleteById(int id) {
		todoRepo.deleteById(id);
	}

	public Todo findById(int id) {
		return todoRepo.findById(id).orElseThrow();
	}
	@Transactional
	public void updateTodo(Todo todo) {
		Todo updateTodo = findById(todo.getId());
		updateTodo.setDescription(todo.getDescription());
		updateTodo.setDone(todo.isDone());
		updateTodo.setTargetDate(todo.getTargetDate());
		todoRepo.save(updateTodo);
	}
}