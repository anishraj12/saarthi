package com.saarthi.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.saarthi.model.MedicineModel;
@Repository
public interface MedicineRepo extends JpaRepository<MedicineModel, Long> {

	
	@Query(value ="select m.drug from medicine_model m where m.disease=?1 and m.age=?2 and m.gender=?3 and severity=?4" , nativeQuery = true )
	String findMedicine(String disease, int age, String gender, String severity);
	
	
}
