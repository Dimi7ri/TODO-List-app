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
package com.dimitri.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * 
 * @author Dimitri Vasiliev
 *
 */

@Entity
public class Tasks {
	
	@Id @GeneratedValue
	private Long id;
	
	@NotNull
	@Size(min=2, max=30)
	private String taskname;
	
	@NotNull
	private Date performdate;
	
	@NotNull
	@Size(min=5, max=15)
	private String category;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private Priority priority;
	
	@NotNull
	private Boolean isdone;
	
	public Tasks(String taskname, Date performdate, String category, Priority priority, Boolean isdone){
		this.taskname = taskname;
		this.performdate = performdate;
		this.category = category;
		this.priority = priority;
		this.isdone = false;
	}

	public Tasks(){
	}

	public Long getId(){
		return id;
	}

	public String getName(){
		return taskname;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTaskname() {
		return taskname;
	}

	public Date getPerformdate() {
		return performdate;
	}

	public String getCategory() {
		return category;
	}

	public Priority getPriority() {
		return priority;
	}
	
	public Boolean getIsdone() {
		return isdone;
	}

}
