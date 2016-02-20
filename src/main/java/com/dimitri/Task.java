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
package com.dimitri;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 
 * @author Dimitri Vasiliev
 *
 */

@Entity
public class Task {
	
	@Id @GeneratedValue
	private Long id;
	private String taskname;
	
	public Task(String taskname) {
		super();
		this.taskname = taskname;
	}
	
	public Task(){
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return taskname;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", taskname=" + taskname + "]";
	}
	
	
	
}
