package com.saarthi.model;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TreatmentModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String prakruti;
	
	private String gender;
	
	private String ageRange;
	
	private String medicineName;
	
	private String medicineDescription;
	
	private String formulation;
	
	private String articleReference;
	
	private String articleLink;
	
	private String disease;

	
	

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPrakruti() {
		return prakruti;
	}

	public void setPrakruti(String prakruti) {
		this.prakruti = prakruti;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAgeRange() {
		return ageRange;
	}

	public void setAgeRange(String ageRange) {
		this.ageRange = ageRange;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public String getMedicineDescription() {
		return medicineDescription;
	}

	public void setMedicineDescription(String medicineDescription) {
		this.medicineDescription = medicineDescription;
	}

	public String getFormulation() {
		return formulation;
	}

	public void setFormulation(String formulation) {
		this.formulation = formulation;
	}

	public String getArticleReference() {
		return articleReference;
	}

	public void setArticleReference(String articleReference) {
		this.articleReference = articleReference;
	}

	public String getArticleLink() {
		return articleLink;
	}

	public void setArticleLink(String articleLink) {
		this.articleLink = articleLink;
	}

	@Override
	public String toString() {
		return "TreatmentModel [id=" + id + ", prakruti=" + prakruti + ", gender=" + gender + ", ageRange=" + ageRange
				+ ", medicineName=" + medicineName + ", medicineDescription=" + medicineDescription + ", formulation="
				+ formulation + ", articleReference=" + articleReference + ", articleLink=" + articleLink + ", diease="
				+ disease + "]";
	}

	
	
}
