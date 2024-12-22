package com.saarthi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class AdvisoryModel {
 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long dataId;
	
	private String name;
	
	private String email;

	private String designation;
	
	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Long getDataId() {
		return dataId;
	}

	public void setDataId(Long dataId) {
		this.dataId = dataId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "AdvisoryModel [dataId=" + dataId + ", name=" + name + ", email=" + email + ", designation="
				+ designation + "]";
	}

	
	
}
