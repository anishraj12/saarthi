package com.saarthi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.saarthi.model.PatientHistory;

@Repository
public interface PatientHistoryRepo extends JpaRepository<PatientHistory, Long>{
	
	
	List<PatientHistory> findByPatientId(String patientId);
	
}
