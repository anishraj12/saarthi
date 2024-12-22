package com.saarthi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.saarthi.model.TreatmentModel;
@Repository
public interface TreatmentRepo  extends JpaRepository<TreatmentModel, Long>{
	
	@Query(value = "select disease from saarthi.treatment_model", nativeQuery = true)
	List<String> getAllDiease();

	@Query(value="SELECT * FROM saarthi.treatment_model t " +
	           " WHERE t.disease = ?1 AND t.age_range = ?2 AND t.gender = ?3 AND t.prakruti = ?4",nativeQuery=true)
	List<TreatmentModel> getMedicineDetails(String disease, String ageRange, String gender, String prakruti);
		
}
