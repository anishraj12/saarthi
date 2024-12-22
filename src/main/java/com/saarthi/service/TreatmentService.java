package com.saarthi.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.model.TreatmentModel;
import com.saarthi.repo.TreatmentRepo;

@Service
public class TreatmentService {

	@Autowired
	TreatmentRepo treatmentRepo;
	
	public List<String> getAllDiease() {
		List<String>list=treatmentRepo.getAllDiease();
		Set<String> set = new HashSet<>(list);
		List<String> newList = new ArrayList<>(set);
		return  newList;
	}
		public List<TreatmentModel> findMedicineDetails(String disease,String age,String gender ,String prakruti){
			if(Integer.parseInt(age)<=15) {
				age="upTo 15";
			}else if(Integer.parseInt(age)<=50) {
				age="16 to 50";
			}else  {
				age="51 and above";
			}
			List<TreatmentModel>list=treatmentRepo.getMedicineDetails(disease,age,gender,prakruti);
			System.out.println("hiiiii!!"+list);
			return list;
		
	}
}
