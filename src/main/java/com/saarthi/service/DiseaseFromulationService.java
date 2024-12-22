package com.saarthi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.repo.DiseaseFormulationRepo;

@Service
public class DiseaseFromulationService {

	@Autowired
	DiseaseFormulationRepo diseaseFormulationRepo;
	


	
	  public List<String> findAllDiseaseName() {
		  List<String>list =diseaseFormulationRepo.findAllDiseaseNames();
		  System.out.println(list);
	  return list;
	  }




	public List<String> getDiseaseByDiseaseName(String disease) {
		
		return diseaseFormulationRepo.getDiseaseByDiseaseName(disease);
	}
	 
	
}
