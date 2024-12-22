package com.saarthi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.model.PatientHistory;
import com.saarthi.repo.PatientHistoryRepo;

@Service
public class PatientHistoryService {

	@Autowired
	PatientHistoryRepo historyRepo;
	
	public List<PatientHistory> findByPatientId(String patientId) {
		List<PatientHistory> newlist= historyRepo.findByPatientId( patientId);
		return newlist;
		
	}

	public PatientHistory save(PatientHistory patientHistory) {
		PatientHistory newhistory= historyRepo.save(patientHistory);
		return newhistory;
	}
	
	
	
	
}
