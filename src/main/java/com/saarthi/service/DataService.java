package com.saarthi.service;

import java.util.ArrayList;
import java.util.List;

import javax.xml.crypto.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.model.DataModel;
import com.saarthi.repo.DataRepo;
import com.saarthi.repo.DataRepoIml;

@Service
public class DataService {

	@Autowired
	DataRepo dataRepo;

	@Autowired
	DataRepoIml dataRepoIml;
	
	public List<DataModel> findAll() {
		List<DataModel> list = dataRepo.findAll();
		System.out.println(dataRepo.findAll());
		return list;
	}

	public String checkWithCondition(DataModel dataModel) {
		String disease = dataRepo.checkWithCondition(dataModel.getAcidity(), dataModel.getIndigestion(),
				dataModel.getHeadache(), dataModel.getBlurred_and_distorted_vision(), dataModel.getExcessive_hunger(),
				dataModel.getMuscle_weakness(), dataModel.getStiff_neck(), dataModel.getSwelling_joints(),
				dataModel.getMovement_stiffness(), dataModel.getDepression(), dataModel.getIrritability(),
				dataModel.getVisual_disturbances(), dataModel.getPainful_walking(), dataModel.getAbdominal_pain(),
				dataModel.getNausea(), dataModel.getVomiting(), dataModel.getBlood_in_mucus(), dataModel.getFatigue(),
				dataModel.getFever(), dataModel.getDehydration(), dataModel.getLoss_of_appetite(),
				dataModel.getCramping(), dataModel.getBlood_in_stool(), dataModel.getGnawing(),
				dataModel.getUpper_abdomain_pain(), dataModel.getFullness_feeling(), dataModel.getHiccups(),
				dataModel.getAbdominal_bloating(), dataModel.getHeartburn(), dataModel.getBelching(),
				dataModel.getBurning_ache());
		System.out.println(disease);
		//disease.toLowerCase();
		return disease;
	}

	public List<String> findAllSymptoms(String symptoms1, String symptoms2, String symptoms3) {
		List<DataModel>list=dataRepoIml.findAllSymptoms(symptoms1,symptoms2,symptoms3);
		List<String>list2=new ArrayList<String>();
		for(DataModel dt:list) {
			list2.add(dt.getPrognosis());
		}
		System.out.println(list2.size());
		return list2;
	}

	/*
	 * public List<DataModel> getSymtoms(int symtoms) { List<DataModel>
	 * list=dataRepo.getSymtoms(symtoms); return list; }
	 */

}
