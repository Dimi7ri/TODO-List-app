/*
 *  This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.dimitri.controllers;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dimitri.models.Tasks;
import com.dimitri.repositories.TasksRepository;

/**
 * 
 * @author Dimitri Vasiliev
 *
 */

@RestController
public class TasksRestController {
	
	@RequestMapping("/tasks")
	Collection<Tasks> tasks(){
		return this.tasksRepository.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/task={id}")
	Tasks getTaskDetails(@PathVariable("id") Long id){
	    return tasksRepository.findOne(id);
	}

	@RequestMapping(method = RequestMethod.POST, value="/tasks")
	public void saveTask(@RequestBody @Valid Tasks task){
		task.setId(null);
		tasksRepository.save(task);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="/task={id}")
	 public void deleteTask(@PathVariable("id") Long id){
		tasksRepository.delete(id);
	 }
	
	@RequestMapping(method = RequestMethod.PUT, value="/task={id}")
	 public void editTask(@RequestBody @Valid Tasks editedTask ,@PathVariable("id") Long id){
		editedTask.setId(id);
		tasksRepository.saveAndFlush(editedTask);
	 }
	
	@Autowired TasksRepository tasksRepository;
}