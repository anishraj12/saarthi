package com.saarthi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.model.PatientHistory;
import com.saarthi.repo.MedicineRepo;
@Service
public class MedicineService {

	
	@Autowired
	MedicineRepo medicineRepo;
	
	public String findMedicine(PatientHistory history) {
		String medicine=medicineRepo.findMedicine(history.getDisease(),history.getAge(),history.getGender(),history.getSeverity());
		return medicine;
	}
	
}
