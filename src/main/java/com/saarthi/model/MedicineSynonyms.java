package com.saarthi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MedicineSynonyms {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long medicineId;
	
	private String scientific_name;
	
	private String common_name;
	
	private String synonyms1;
	
	private String synonyms2;
	
	private String synonyms3;
	
	private String synonyms4;
	
	
	public Long getMedicineId() {
		return medicineId;
	}
	public void setMedicineId(Long medicineId) {
		this.medicineId = medicineId;
	}
	public String getScientific_name() {
		return scientific_name;
	}
	public void setScientific_name(String scientific_name) {
		this.scientific_name = scientific_name;
	}
	public String getCommon_name() {
		return common_name;
	}
	public void setCommon_name(String common_name) {
		this.common_name = common_name;
	}
	public String getSynonyms1() {
		return synonyms1;
	}
	public void setSynonyms1(String synonyms1) {
		this.synonyms1 = synonyms1;
	}
	public String getSynonyms2() {
		return synonyms2;
	}
	public void setSynonyms2(String synonyms2) {
		this.synonyms2 = synonyms2;
	}
	public String getSynonyms3() {
		return synonyms3;
	}
	public void setSynonyms3(String synonyms3) {
		this.synonyms3 = synonyms3;
	}
	public String getSynonyms4() {
		return synonyms4;
	}
	public void setSynonyms4(String synonyms4) {
		this.synonyms4 = synonyms4;
	}
	@Override
	public String toString() {
		return "MedicineSynonyms [medicineId=" + medicineId + ", scientific_name=" + scientific_name + ", common_name="
				+ common_name + ", synonyms1=" + synonyms1 + ", synonyms2=" + synonyms2 + ", synonyms3=" + synonyms3
				+ ", synonyms4=" + synonyms4 + "]";
	}
	
	
	
}
