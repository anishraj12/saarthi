package com.saarthi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.saarthi.model.DiseaseFromulationModel;
@Repository
public interface DiseaseFormulationRepo extends JpaRepository<DiseaseFromulationModel, Long>{
	
	@Query(value = "SELECT disease_name FROM saarthi.disease_fromulation_model", nativeQuery = true)
	public  List<String> findAllDiseaseNames();

	public List<String> getDiseaseByDiseaseName(String disease); 

}
