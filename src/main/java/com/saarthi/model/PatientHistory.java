package com.saarthi.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PatientHistory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String patientId;
	
	private int age;
	
	private int height;
	
	private int weight;
	
	private String gender;
	
	private Date data_created;
	
	private String disease;
	
	private String medicine;
	
	private String human_nature;
	
	private String doctorId;
	
	private String severity;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPatientId() {
		return patientId;
	}

	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getData_created() {
		return data_created;
	}

	public void setData_created(Date data_created) {
		this.data_created = data_created;
	}

	

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}


	public String getMedicine() {
		return medicine;
	}

	public void setMedicine(String medicine) {
		this.medicine = medicine;
	}

	public String getHuman_nature() {
		return human_nature;
	}

	public void setHuman_nature(String human_nature) {
		this.human_nature = human_nature;
	}

	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}
	
	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public String getSeverity() {
		return severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	@Override
	public String toString() {
		return "PatientHistory [id=" + id + ", patientId=" + patientId + ", age=" + age + ", height=" + height
				+ ", weight=" + weight + ", gender=" + gender + ", data_created=" + data_created + ", disease=" + disease
				+ ", medicine=" + medicine + ", human_nature=" + human_nature + ", doctorId=" + doctorId + ", severity="
				+ severity + "]";
	}



	
}
