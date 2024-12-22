package com.saarthi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity(name="data_model")
public class DataModel {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long dataId;
	
	private int acidity;
	
	private int  indigestion;
	
	private int headache;
	
	private int blurred_and_distorted_vision;
	
	private int excessive_hunger;
	
	private int muscle_weakness;
	
	private int stiff_neck;
	
	private int swelling_joints;
	
	private int movement_stiffness;
	
	private int depression;
	
	private int irritability;
	
	private int visual_disturbances;
	
	private int painful_walking;
	
	private int abdominal_pain;
	
	private int nausea;
	
	private int  vomiting;
	
	private int blood_in_mucus;
	
	private int fatigue;
	
	private int fever;
	
	private int dehydration;
	
	private int loss_of_appetite;
	
	private int cramping;
	
	private int blood_in_stool;
	
	private int gnawing;
	
	private int upper_abdomain_pain;
	
	private int fullness_feeling ;
	
	private int hiccups;
	
	private int abdominal_bloating;
	
	private int heartburn;
	
	private int belching;
	
	private int burning_ache;
	
	private String prognosis;
	

	public Long getDataId() {
		return dataId;
	}

	public int getAcidity() {
		return acidity;
	}

	public int getIndigestion() {
		return indigestion;
	}

	public int getHeadache() {
		return headache;
	}

	public int getBlurred_and_distorted_vision() {
		return blurred_and_distorted_vision;
	}

	public int getExcessive_hunger() {
		return excessive_hunger;
	}

	public int getMuscle_weakness() {
		return muscle_weakness;
	}

	public int getStiff_neck() {
		return stiff_neck;
	}

	public int getSwelling_joints() {
		return swelling_joints;
	}

	public int getMovement_stiffness() {
		return movement_stiffness;
	}

	public int getDepression() {
		return depression;
	}

	public int getIrritability() {
		return irritability;
	}

	public int getVisual_disturbances() {
		return visual_disturbances;
	}

	public int getPainful_walking() {
		return painful_walking;
	}

	public int getAbdominal_pain() {
		return abdominal_pain;
	}

	public int getNausea() {
		return nausea;
	}

	public int getVomiting() {
		return vomiting;
	}

	public int getBlood_in_mucus() {
		return blood_in_mucus;
	}

	public int getFatigue() {
		return fatigue;
	}

	public int getFever() {
		return fever;
	}

	public int getDehydration() {
		return dehydration;
	}

	public int getLoss_of_appetite() {
		return loss_of_appetite;
	}

	public int getCramping() {
		return cramping;
	}

	public int getBlood_in_stool() {
		return blood_in_stool;
	}

	public int getGnawing() {
		return gnawing;
	}

	public int getUpper_abdomain_pain() {
		return upper_abdomain_pain;
	}

	public int getFullness_feeling() {
		return fullness_feeling;
	}

	public int getHiccups() {
		return hiccups;
	}

	public int getAbdominal_bloating() {
		return abdominal_bloating;
	}

	public int getHeartburn() {
		return heartburn;
	}

	public int getBelching() {
		return belching;
	}

	public int getBurning_ache() {
		return burning_ache;
	}

	public String getPrognosis() {
		return prognosis;
	}
	
	
	public void setDataId(Long dataId) {
		this.dataId = dataId;
	}

	public void setAcidity(int acidity) {
		this.acidity = acidity;
	}

	public void setIndigestion(int indigestion) {
		this.indigestion = indigestion;
	}

	public void setHeadache(int headache) {
		this.headache = headache;
	}

	public void setBlurred_and_distorted_vision(int blurred_and_distorted_vision) {
		this.blurred_and_distorted_vision = blurred_and_distorted_vision;
	}

	public void setExcessive_hunger(int excessive_hunger) {
		this.excessive_hunger = excessive_hunger;
	}

	public void setMuscle_weakness(int muscle_weakness) {
		this.muscle_weakness = muscle_weakness;
	}

	public void setStiff_neck(int stiff_neck) {
		this.stiff_neck = stiff_neck;
	}

	public void setSwelling_joints(int swelling_joints) {
		this.swelling_joints = swelling_joints;
	}

	public void setMovement_stiffness(int movement_stiffness) {
		this.movement_stiffness = movement_stiffness;
	}

	public void setDepression(int depression) {
		this.depression = depression;
	}

	public void setIrritability(int irritability) {
		this.irritability = irritability;
	}

	public void setVisual_disturbances(int visual_disturbances) {
		this.visual_disturbances = visual_disturbances;
	}

	public void setPainful_walking(int painful_walking) {
		this.painful_walking = painful_walking;
	}

	public void setAbdominal_pain(int abdominal_pain) {
		this.abdominal_pain = abdominal_pain;
	}

	public void setNausea(int nausea) {
		this.nausea = nausea;
	}

	public void setVomiting(int vomiting) {
		this.vomiting = vomiting;
	}

	public void setBlood_in_mucus(int blood_in_mucus) {
		this.blood_in_mucus = blood_in_mucus;
	}

	public void setFatigue(int fatigue) {
		fatigue = fatigue;
	}

	public void setFever(int fever) {
		fever = fever;
	}

	public void setDehydration(int dehydration) {
		this.dehydration = dehydration;
	}

	public void setLoss_of_appetite(int loss_of_appetite) {
		this.loss_of_appetite = loss_of_appetite;
	}

	public void setCramping(int cramping) {
		this.cramping = cramping;
	}

	public void setBlood_in_stool(int blood_in_stool) {
		this.blood_in_stool = blood_in_stool;
	}

	public void setGnawing(int gnawing) {
		this.gnawing = gnawing;
	}

	public void setUpper_abdomain_pain(int upper_abdomain_pain) {
		this.upper_abdomain_pain = upper_abdomain_pain;
	}

	public void setFullness_feeling(int fullness_feeling) {
		this.fullness_feeling = fullness_feeling;
	}

	public void setHiccups(int hiccups) {
		this.hiccups = hiccups;
	}

	public void setAbdominal_bloating(int abdominal_bloating) {
		this.abdominal_bloating = abdominal_bloating;
	}

	public void setHeartburn(int heartburn) {
		this.heartburn = heartburn;
	}

	public void setBelching(int belching) {
		this.belching = belching;
	}

	public void setBurning_ache(int burning_ache) {
		this.burning_ache = burning_ache;
	}

	public void setPrognosis(String prognosis) {
		this.prognosis = prognosis;
	}

	@Override
	public String toString() {
		return "DataModel [dataId=" + dataId + ", acidity=" + acidity + ", indigestion=" + indigestion + ", headache="
				+ headache + ", blurred_and_distorted_vision=" + blurred_and_distorted_vision + ", excessive_hunger="
				+ excessive_hunger + ", muscle_weakness=" + muscle_weakness + ", stiff_neck=" + stiff_neck
				+ ", swelling_joints=" + swelling_joints + ", movement_stiffness=" + movement_stiffness
				+ ", depression=" + depression + ", irritability=" + irritability + ", visual_disturbances="
				+ visual_disturbances + ", painful_walking=" + painful_walking + ", abdominal_pain=" + abdominal_pain
				+ ", nausea=" + nausea + ", vomiting=" + vomiting + ", blood_in_mucus=" + blood_in_mucus + ", fatigue="
				+ fatigue + ", Fever=" + fever + ", dehydration=" + dehydration + ", loss_of_appetite="
				+ loss_of_appetite + ", cramping=" + cramping + ", blood_in_stool=" + blood_in_stool + ", gnawing="
				+ gnawing + ", upper_abdomain_pain=" + upper_abdomain_pain + ", fullness_feeling=" + fullness_feeling
				+ ", hiccups=" + hiccups + ", abdominal_bloating=" + abdominal_bloating + ", heartburn=" + heartburn
				+ ", belching=" + belching + ", burning_ache=" + burning_ache + ", prognosis=" + prognosis + "]";
	}
	
}
