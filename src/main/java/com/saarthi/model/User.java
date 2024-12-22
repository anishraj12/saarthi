package com.saarthi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String hasRole;
	
	@Column(unique=true)
	private String username;
	
	private String password;
	
	
	
	public String getHasRole() {
		return hasRole;
	}

	public void setHasRole(String hasRole) {
		this.hasRole = hasRole;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	@Override
	public String toString() {
		return "User [id=" + id + ", hasRole=" + hasRole + ", username=" + username + ", password=" + password + "]";
	}

	public User(Long id, String hasRole, String username, String password) {
		super();
		this.id = id;
		this.hasRole = hasRole;
		this.username = username;
		this.password = password;
	}

	public User() {
		super();
	}


	

	
}
