package com.saarthi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.model.AdvisoryModel;
import com.saarthi.repo.AdvisoryRepo;

@Service
public class AdvisoryService {

	@Autowired
	AdvisoryRepo advisoryRepo;
	public void save(AdvisoryModel advisoryModel) {
		advisoryRepo.save(advisoryModel);
		
	}
	public List<AdvisoryModel> getAllAdvisory() {
		return advisoryRepo.findAll();
	}
	
	
}
